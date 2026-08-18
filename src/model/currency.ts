import {poeGet} from 'src/model/poeApi';
import {IconResponse, IItem, PriceResponse} from 'src/model/interface';
import {calcLevel} from 'src/model/priceLevel';

export interface CurrencyGroup {
  top: string
  left: string
  class: string
  list: Array<Currency>
}

// One group per stash row-block; top/left are placeholders — align on the
// currency-stash art. The 7 shard/fragment items carry no price or icon because
// poe.ninja's Currency feed omits low-value currency (see SHARD ids below).
const G1: CurrencyGroup = {
  top: '61px',
  left: '18px',
  class: '',
  list: Array<Currency>(
    { id: 'scroll-fragment', name: '주문서 조각', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'wisdom', name: '감정 주문서', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'portal', name: '포탈 주문서', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] }
  )
}
const G2: CurrencyGroup = {
  top: '61px',
  left: '329px',
  class: '',
  list: Array<Currency>(
    { id: 'enkindling-orb', name: '자극의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'instilling-orb', name: '주입의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] }
  )
}
const G3: CurrencyGroup = {
  top: '61px',
  left: '498px',
  class: '',
  list: Array<Currency>(
    { id: 'whetstone', name: '대장장이의 숫돌', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'scrap', name: '방어구 장인의 고철', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'bauble', name: '유리직공의 방울', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'gcp', name: '세공사의 프리즘', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] }
  )
}
const G4: CurrencyGroup = {
  top: '147px',
  left: '18px',
  class: '',
  list: Array<Currency>(
    { id: 'transmute', name: '진화의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'alt', name: '변화의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'annul', name: '소멸의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'chance', name: '기회의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] }
  )
}
const G5: CurrencyGroup = {
  top: '147px',
  left: '329px',
  class: '',
  list: Array<Currency>(
    { id: 'exalted', name: '엑잘티드 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'mirror', name: '칼란드라의 거울', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] }
  )
}
const G6: CurrencyGroup = {
  top: '147px',
  left: '498px',
  class: '',
  list: Array<Currency>(
    { id: 'regal', name: '제왕의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'alch', name: '연금술의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'chaos', name: '카오스 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'blessed', name: '축복의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] }
  )
}
const G7: CurrencyGroup = {
  top: '219px',
  left: '18px',
  class: '',
  list: Array<Currency>(
    { id: 'transmutation-shard', name: '진화의 파편', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'alteration-shard', name: '변화의 파편', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'annulment-shard', name: '소멸의 파편', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'aug', name: '확장의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] }
  )
}
const G8: CurrencyGroup = {
  top: '219px',
  left: '329px',
  class: '',
  list: Array<Currency>(
    { id: 'exalted-shard', name: '엑잘티드 파편', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'mirror-shard', name: '거울 파편', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] }
  )
}
const G9: CurrencyGroup = {
  top: '219px',
  left: '498px',
  class: '',
  list: Array<Currency>(
    { id: 'regal-shard', name: '제왕의 파편', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'alchemy-shard', name: '연금술의 파편', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'chaos-shard', name: '카오스 파편', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'divine', name: '신성한 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] }
  )
}
const G10: CurrencyGroup = {
  top: '304px',
  left: '18px',
  class: '',
  list: Array<Currency>(
    { id: 'fracturing-orb', name: '분열의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'jewellers', name: '쥬얼러 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'fusing', name: '연결의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'chrome', name: '색채의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] }
  )
}
const G11: CurrencyGroup = {
  top: '304px',
  left: '498px',
  class: '',
  list: Array<Currency>(
    { id: 'scour', name: '정제의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'sacred-orb', name: '성스러운 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'stacked-deck', name: '카드 묶음', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'vaal', name: '바알 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] }
  )
}
const G12: CurrencyGroup = {
  top: '377px',
  left: '19px',
  class: '',
  list: Array<Currency>(
    { id: 'fracturing-shard', name: '분열의 파편', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'ancient-orb', name: '고대의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'orb-of-binding', name: '속박의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'hinekoras-lock', name: '히네코라의 머리카락', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] }
  )
}
const G13: CurrencyGroup = {
  top: '377px',
  left: '498px',
  class: '',
  list: Array<Currency>(
    { id: 'regret', name: '후회의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'orb-of-unmaking', name: '취소의 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'veiled-exalted-orb', name: '장막의 엑잘티드 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] },
    { id: 'veiled-chaos-orb', name: '장막의 카오스 오브', icon: '', chaos: 0, level: 0, top: '', left: '', description: [] }
  )
}

export class Currency implements IItem {
  id = ''
  name = ''
  icon = ''
  chaos = 0
  level = 0
  top = ''
  left = ''
  description: Array<string> = []

  static async fetch() {
    const groups = [
      G1,
      G2,
      G3,
      G4,
      G5,
      G6,
      G7,
      G8,
      G9,
      G10,
      G11,
      G12,
      G13
    ]

    const response = await poeGet('Currency')
    const priceRes: PriceResponse[] = response.data.lines
    const iconRes: IconResponse[] = response.data.items
    priceRes.forEach(data => {
      groups.forEach(group => {
        group.list.forEach(currency => {
          if (currency.id === data.id) {
            currency.chaos = Number(Number(data.primaryValue || 0).toFixed(1))
            currency.level = calcLevel(data.primaryValue)
          }
        })
      })
    })
    iconRes.forEach(data => {
      groups.forEach(group => {
        group.list.forEach(currency => {
          if (currency.id === data.id) {
            currency.icon = `https://web.poecdn.com${data.image}`
          }
        })
      })
    })
    return groups
  }
}
