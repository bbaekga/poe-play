import {poeGet} from 'src/model/poeApi';
import {IconResponse, IItem, PriceResponse} from 'src/model/interface';

export class Fossil implements IItem {
  id = ''
  name = ''
  icon = ''
  chaos = 0
  top = ''
  left = ''
  description: Array<string> = []

  static async fetch() {
    const list: Array<Fossil> = [
      { id: 'jagged-fossil', name: '뾰족한 화석', icon: '', chaos: 0, description: ['물리 속성 부여 증가', '카오스 속성 부여 없음'], top: '59px', left: '113px' },
      { id: 'dense-fossil', name: '조밀한 화석', icon: '', chaos: 0, description: ['방어 속성 부여 증가', '생명력 속성 부여 없음'], top: '59px', left: '197px' },
      { id: 'frigid-fossil', name: '차디찬 화석', icon: '', chaos: 0, description: ['냉기 속성 부여 증가', '화염 속성 부여 없음'], top: '59px', left: '281px' },
      { id: 'aberrant-fossil', name: '특이한 화석', icon: '', chaos: 0, description: ['카오스 속성 부여 증가', '번개 속성 부여 없음'], top: '59px', left: '365px' },
      { id: 'scorched-fossil', name: '그을린 화석', icon: '', chaos: 0, description: ['화염 속성 부여 증가', '냉기 속성 부여 없음'], top: '59px', left: '450px' },
      { id: 'metallic-fossil', name: '금속성 화석', icon: '', chaos: 0, description: ['번개 속성 부여 증가', '물리 속성 부여 없음'], top: '59px', left: '535px' },
      { id: 'pristine-fossil', name: '온전한 화석', icon: '', chaos: 0, description: ['생명력 속성 부여 증가', '방어 속성 부여 없음'], top: '59px', left: '618px' },

      { id: 'bound-fossil', name: '속박의 화석', icon: '', chaos: 0, description: ['소환수 혹은 오라 혹은 저주 속성 부여 증가'], top: '144px', left: '30px' },
      { id: 'corroded-fossil', name: '부식된 화석', icon: '', chaos: 0, description: ['물리 상태 이상 혹은 카오스 상태 이상 속성 부여 증가', '원소 속성 부여 없음'], top: '144px', left: '113px' },
      { id: 'opulent-fossil', name: '호화로운 화석', icon: '', chaos: 0, description: ['출현 확률 속성 개수 증가', '태그 없는 속성 없음'], top: '144px', left: '197px' },
      { id: 'prismatic-fossil', name: '분광 화석', icon: '', chaos: 0, description: ['원소 속성 부여 증가', '물리 상태 이상 혹은 카오스 상태 이상 속성 부여 없음'], top: '144px', left: '281px' },
      { id: 'deft-fossil', name: '날렵한 화석', icon: '', chaos: 0, description: ['치명타 속성 부여 증가', '능력치 속성 부여 없음'], top: '144px', left: '365px' },
      { id: 'aetheric-fossil', name: '에테르 화석', icon: '', chaos: 0, description: ['시전 속성 부여 증가', '공격 속성 부여 감소'], top: '144px', left: '450px' },
      { id: 'lucent-fossil', name: '빛나는 화석', icon: '', chaos: 0, description: ['마나 속성 부여 증가', '속도 속성 부여 없음'], top: '144px', left: '535px' },
      { id: 'serrated-fossil', name: '톱니 화석', icon: '', chaos: 0, description: ['공격 속성 부여 증가', '시전 속성 부여 감소'], top: '144px', left: '618px' },
      { id: 'shuddering-fossil', name: '전율의 화석', icon: '', chaos: 0, description: ['속도 속성 부여 증가', '마나 속성 부여 없음'], top: '144px', left: '700px' },

      { id: 'tangled-fossil', name: '얽혀든 화석', icon: '', chaos: 0, description: ['무작위 속성 유형 1개의 등장 확률을 크게 높이고', '다른 무작위 속성 유형 1개를 등장하지 않게 합니다.', '효과는 공명기의 모든 홈에 화석을 장착한 후 드러납니다.'], top: '228px', left: '71px' },
      { id: 'bloodstained-fossil', name: '피얼룩 화석', icon: '', chaos: 0, description: ['타락', '타락한 고정 속성 부여 보유'], top: '228px', left: '155px' },
      { id: 'gilded-fossil', name: '도금된 화석', icon: '', chaos: 0, description: ['상인에게 판매할 때 얻는 화폐 증가'], top: '228px', left: '281px' },
      { id: 'fundamental-fossil', name: '근본적인 화석', icon: '', chaos: 0, description: ['능력치 속성 부여 증가', '치명타 속성 부여 없음'], top: '228px', left: '365px' },
      { id: 'sanctified-fossil', name: '축성된 화석', icon: '', chaos: 0, description: ['속성 부여 결정 시 관련 수치 개선', '고레벨 속성 부여 등장 빈도 증가'], top: '228px', left: '450px' },
      { id: 'hollow-fossil', name: '공허의 화석', icon: '', chaos: 0, description: ['심연 홈 보유'], top: '228px', left: '576px' },
      { id: 'fractured-fossil', name: '분열된 화석', icon: '', chaos: 0, description: ['분할된 복제본을 만듭니다.', '영향을 받은 아이템,', '인챈트된 아이템, 결합된 아이템, 분열된 아이템은 분할할 수 없습니다.'], top: '228px', left: '660px' },

      { id: 'glyphic-fossil', name: '상형 문자 화석', icon: '', chaos: 0, description: ['타락 에센스 속성 부여 보유'], top: '310px', left: '113px' },
      { id: 'faceted-fossil', name: '연마한 화석', icon: '', chaos: 0, description: ['젬 속성 부여 증가'], top: '310px', left: '618px' },
    ]
    const response = await poeGet('Fossil')
    const priceRes: PriceResponse[] = response.data.lines
    const iconRes: IconResponse[] = response.data.items
    priceRes.forEach(data => {
      list.forEach(fossil => {
        if (fossil.id === data.id) {
          fossil.chaos = Number(Number(data.primaryValue || 0).toFixed(1))
        }
      })
    })
    iconRes.forEach(data => {
      list.forEach(fossil => {
        if (fossil.id === data.id) {
          fossil.icon = `https://web.poecdn.com${data.image}`
        }
      })
    })
    return list
  }
}

export class Resonator implements IItem {
  id = ''
  name = ''
  icon = ''
  chaos = 0
  level = 0
  top = ''
  left = ''

  static async fetch() {
    const list: Array<Resonator> = [
      { id: 'primitive-chaotic-resonator', name: '초기형 혼돈 공명기', icon: '', chaos: 0, level: 1, top: '632px', left: '186px' },
      { id: 'potent-chaotic-resonator', name: '강화형 혼돈 공명기', icon: '', chaos: 0, level: 2, top: '609px', left: '268px' },
      { id: 'powerful-chaotic-resonator', name: '강력 혼돈 공명기', icon: '', chaos: 0, level: 3, top: '607px', left: '354px' },
      { id: 'prime-chaotic-resonator', name: '최종형 혼돈 공명기', icon: '', chaos: 0, level: 4, top: '605px', left: '489px' },
    ]
    const response = await poeGet('Resonator')
    const priceRes: PriceResponse[] = response.data.lines
    const iconRes: IconResponse[] = response.data.items
    priceRes.forEach(data => {
      list.forEach(resonator => {
        if (resonator.id === data.id) {
          resonator.chaos = Number(Number(data.primaryValue || 0).toFixed(1))
        }
      })
    })
    iconRes.forEach(data => {
      list.forEach(resonator => {
        if (resonator.id === data.id) {
          resonator.icon = `https://web.poecdn.com${data.image}`
        }
      })
    })
    return list
  }
}


