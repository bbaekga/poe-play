import {NullString} from 'src/model/commonTypes'

class Distribution {
  size = 0
  probability = 0

  constructor(size: number, probability: number) {
    this.size = size
    this.probability = probability
  }
}

class Item {
  modifiers: Set<Modifier> = new Set()

  constructor(modifiers: Set<Modifier>) {
    this.modifiers = modifiers
  }

  get prefixes() {
    return Array.from(this.modifiers).filter(m => m.isPrefix)
  }

  get suffixes() {
    return Array.from(this.modifiers).filter(m => !m.isPrefix)
  }
}

class CalResult {
  entities: Array<Entity> = []
  netEntities: Array<Entity> = []
  hasExclusive = false

  constructor(entities: Array<Entity>) {
    this.entities = entities
    this.hasExclusive = entities.some(e => e.hasExclusive)
  }
}

export class Entity {
  modifiers: Set<Modifier> = new Set()
  probability = 0
  hasExclusive = false

  constructor(modifiers: Set<Modifier>, probability: number) {
    this.modifiers = modifiers
    this.probability = probability
    this.hasExclusive = Array.from(this.modifiers).some(m => m.isExclusive)
  }

  sort() {
    const collator = new Intl.Collator('ko-KR')
    this.modifiers = new Set(Array.from(this.modifiers).sort((m1, m2) => {
      if (m1.isPrefix && !m2.isPrefix) return -1
      if (!m1.isPrefix && m2.isPrefix) return 1
      if (!m1.isExclusive && m2.isExclusive) return -1
      if (m1.isExclusive && !m2.isExclusive) return 1
      return collator.compare(String(m1.identifier), String(m2.identifier))
    }))
    this.probability = Number((this.probability * 100).toFixed(1))
  }

  get hasPrefix() {
    return Array.from(this.modifiers).filter(m => m.isPrefix).length > 0
  }

  get hasSuffix() {
    return Array.from(this.modifiers).filter(m => !m.isPrefix).length > 0
  }
}

export class Modifier {
  identifier: NullString = null
  isPrefix = false
  isExclusive = false

  constructor(identifier: NullString = null, isPrefix = false, isExclusive = false) {
    this.identifier = identifier
    this.isPrefix = isPrefix
    this.isExclusive = isExclusive
  }

  get identifierKey() {
    const type = this.isPrefix ? '[P]' : '[S]'
    const exclusive = this.isExclusive ? ' (E)' : ''
    return `${type} ${this.identifier}${exclusive}`
  }
}

function Prefix(identifier: NullString, isExclusive = false) {
  return new Modifier(identifier, true, isExclusive)
}

function Suffix(identifier: NullString, isExclusive = false) {
  return new Modifier(identifier, false, isExclusive)
}

export function runCombination(mod1P: Array<Modifier>, mod1S: Array<Modifier>, mod2P: Array<Modifier>, mod2S: Array<Modifier>) {
  const item1Modifiers = new Set([...mod1P.map(m => Prefix(m.identifier, m.isExclusive)), ...mod1S.map(m => Suffix(m.identifier, m.isExclusive))])
  const item2Modifiers = new Set([...mod2P.map(m => Prefix(m.identifier, m.isExclusive)), ...mod2S.map(m => Suffix(m.identifier, m.isExclusive))])
  const item1 = new Item(item1Modifiers)
  const item2 = new Item(item2Modifiers)
  const result = start(item1, item2)
  const netResultMap = new Map()
  result.entities.forEach(entity => {
    entity.sort()
    const filteredModifiers = Array.from(entity.modifiers).filter(m => !m.isExclusive)
    const key = modifiersToString(new Set(filteredModifiers))
    const value = netResultMap.get(key) || new Entity(new Set(filteredModifiers), 0)
    value.probability = value.probability + entity.probability
    netResultMap.set(key, value)
  })
  result.netEntities = Array.from(netResultMap.values())
  return result
}

function start(item1: Item, item2: Item) {
  if (item1.modifiers.size === 1 && item2.modifiers.size === 1) {
    const item1Modifier = Array.from(item1.modifiers)[0]
    const item2Modifier = Array.from(item2.modifiers)[0]
    if (item1Modifier.isPrefix !== item2Modifier.isPrefix) {
      if (item1Modifier.isExclusive && item2Modifier.isExclusive) {
        return new CalResult([
          new Entity(new Set([item1Modifier]), 1 / 2),
          new Entity(new Set([item2Modifier]), 1 / 2),
        ])
      } else {
        return new CalResult([
          new Entity(new Set([item1Modifier]), 1 / 3),
          new Entity(new Set([item2Modifier]), 1 / 3),
          new Entity(new Set([item1Modifier, item2Modifier]), 1 / 3),
        ])
      }
    }
  }

  const prefixes = [...item1.prefixes, ...item2.prefixes]
  const suffixes = [...item1.suffixes, ...item2.suffixes]
  const prefixFirst = multiply(prefixes, suffixes)
  const suffixFirst = multiply(suffixes, prefixes)
  return merge(scale(prefixFirst, 0.5), scale(suffixFirst, 0.5))
}

function multiply(first: Array<Modifier>, second: Array<Modifier>) {
  const firstResult = calculate(first, false)
  const entities = firstResult.entities.flatMap(firstEntity => {
    const secondResult = calculate(second, firstEntity.hasExclusive)
    return secondResult.entities.map(secondEntity => {
      return new Entity(new Set([...firstEntity.modifiers, ...secondEntity.modifiers]), firstEntity.probability * secondEntity.probability)
    })
  })
  return new CalResult(entities)
}

function calculate(candidates: Array<Modifier>, excludeExclusive = false) {
  const totalSize = candidates.length
  const actualCandidates = candidates.filter(c => !excludeExclusive || !c.isExclusive)
  const distributions = getDistributions(totalSize)
  const resultMap = new Map()
  distributions.forEach(({ size, probability }) => {
    const combinations = generate(actualCandidates, size)
    combinations.forEach(modifiers => {
      const key = modifiersToString(modifiers)
      const value = resultMap.get(key) || new Entity(modifiers, 0)
      value.probability = value.probability + (probability / combinations.length)
      resultMap.set(key, value)
    })
  })
  return new CalResult(Array.from(resultMap.values()))
}

function getDistributions(totalSize: number) {
  switch(totalSize) {
    case 6:
      return [new Distribution(3, 0.72), new Distribution(2, 0.28)]
    case 5:
      return [new Distribution(3, 0.57), new Distribution(2, 0.43)]
    case 4:
      return [new Distribution(3, 0.31), new Distribution(2, 0.59), new Distribution(1, 0.11)]
    case 3:
      return [new Distribution(3, 0.10), new Distribution(2, 0.52), new Distribution(1, 0.39)]
    case 2:
      return [new Distribution(2, 0.33), new Distribution(1, 0.67)]
    case 1:
      return [new Distribution(1, 0.59), new Distribution(0, 0.41)]
    case 0:
      return [new Distribution(0, 1)]
    default:
      throw new Error('속성개수 오류')
  }
}

function generate(candidates: Array<Modifier>, remain: number): Array<Set<Modifier>> {
  if (remain === 0 || candidates.length === 0) {
    return [new Set()]
  }
  const result: Array<Set<Modifier>> = []
  candidates.forEach(candidate => {
    const childCandidates = [...candidates].filter(c => c.identifier != candidate.identifier && (!candidate.isExclusive || !c.isExclusive))
    const childResults = generate(childCandidates, remain - 1)
    childResults.forEach(childResult => {
      const newCombination = new Set([...childResult, candidate])
      result.push(newCombination)
    })
  })
  return result
}

function modifiersToString(modifiers: Set<Modifier>): string {
  const collator = new Intl.Collator('ko-KR')
  return Array.from(modifiers).sort((m1, m2) => collator.compare(String(m1.identifierKey), String(m2.identifierKey)))
    .map((m: Modifier) => `${m.isPrefix ? 'p-' : 's-'}${m.isExclusive ? 'e-' : ''}${m.identifier}`)
    .join(',')
}

function merge(result1: CalResult, result2: CalResult) {
  const merged = new Map()
  result1.entities.forEach(entity => {
    const key = modifiersToString(entity.modifiers)
    const value = merged.get(key) || new Entity(entity.modifiers, 0)
    value.probability = value.probability + entity.probability
    merged.set(key, value)
  })
  result2.entities.forEach(entity => {
    const key = modifiersToString(entity.modifiers)
    const value = merged.get(key) || new Entity(entity.modifiers, 0)
    value.probability = value.probability + entity.probability
    merged.set(key, value)
  })
  return new CalResult(Array.from(merged.values()))
}

function scale(result: CalResult, factor: number) {
  return new CalResult(result.entities.map(entity => new Entity(entity.modifiers, entity.probability * factor)))
}
