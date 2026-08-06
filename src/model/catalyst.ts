import {poeGet} from 'src/model/poeApi';
import {IconResponse, IItem, PriceResponse} from 'src/model/interface';

export class Catalyst implements IItem {
  id = ''
  name = ''
  icon = ''
  chaos = 0
  top = ''
  left = ''
  description: Array<string> = []

  static async fetch() {
    const list: Array<Catalyst> = [
      { id: 'tainted-catalyst', name: '더럽혀진 기폭제', icon: 'https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/TaintedCatalyst.webp', chaos: 0, top: '38px', left: '364px', description: ['타락한 반지, 목걸이 또는 허리띠에 무작위 유형 및 수치의 퀄리티 1개를 적용합니다', '다른 퀄리티 유형을 대체합니다'] },
      { id: 'abrasive-catalyst', name: '연마의 기폭제', icon: 'https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/AbrasiveCatalyst.webp', chaos: 0, top: '122px', left: '236px', description: ['퀄리티를 추가하여 반지나 목걸이, 허리띠에 부여된 공격 속성을 향상합니다.', '기존 퀄리티 유형을 대체합니다.'] },
      { id: 'tempering-catalyst', name: '완화의 기폭제', icon: 'https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/TemperingCatalyst.webp', chaos: 0, top: '122px', left: '320px', description: ['퀄리티를 추가하여 반지나 목걸이, 허리띠에 부여된 방어 속성을 향상합니다.', '기존 퀄리티 유형을 대체합니다.'] },
      { id: 'fertile-catalyst', name: '풍요의 기폭제', icon: 'https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/FertileCatalyst.webp', chaos: 0, top: '122px', left: '405px', description: ['퀄리티를 추가하여 반지나 목걸이, 허리띠에 부여된 생명력 및 마나 속성을 향상합니다.', '기존 퀄리티 유형을 대체합니다.'] },
      { id: 'accelerating-catalyst', name: '가속의 기폭제', icon: 'https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/SpeedModifierCatalyst.webp', chaos: 0, top: '122px', left: '488px', description: ['퀄리티를 추가하여 반지나 목걸이, 허리띠에 부여된 속도 속성을 향상합니다.', '기존 퀄리티 유형을 대체합니다.'] },
      { id: 'unstable-catalyst', name: '불안정한 기폭제', icon: 'https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/CriticalModifierCatalyst.webp', chaos: 0, top: '213px', left: '86px', description: ['퀄리티를 추가하여 반지나 목걸이, 허리띠에 부여된 치명타 속성을 향상합니다.', '기존 퀄리티 유형을 대체합니다.'] },
      { id: 'turbulent-catalyst', name: '격동의 기폭제', icon: 'https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/TurbulentCatalyst.webp', chaos: 0, top: '213px', left: '167px', description: ['퀄리티를 추가하여 반지나 목걸이, 허리띠에 부여된 원소 피해 속성을 향상합니다.', '기존 퀄리티 유형을 대체합니다.'] },
      { id: 'imbued-catalyst', name: '부여의 기폭제', icon: 'https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/ImbuedCatalyst.webp', chaos: 0, top: '213px', left: '251px', description: ['퀄리티를 추가하여 반지나 목걸이, 허리띠에 부여된 시전 속성을 향상합니다.', '기존 퀄리티 유형을 대체합니다.'] },
      { id: 'prismatic-catalyst', name: '분광의 기폭제', icon: 'https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/PrismaticCatalyst.webp', chaos: 0, top: '213px', left: '475px', description: ['퀄리티를 추가하여 반지나 목걸이, 허리띠에 부여된 저항 속성을 향상합니다.', '기존 퀄리티 유형을 대체합니다.'] },
      { id: 'intrinsic-catalyst', name: '본질의 기폭제', icon: 'https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/IntrinsicCatalyst.webp', chaos: 0, top: '213px', left: '558px', description: ['퀄리티를 추가하여 반지나 목걸이, 허리띠에 부여된 능력치 속성을 향상합니다.', '기존 퀄리티 유형을 대체합니다.'] },
      { id: 'noxious-catalyst', name: '유독성 기폭제', icon: 'https://cdn.poedb.tw/image/Art/2DItems/Currency/Catalysts/ChaosPhysicalCatalyst.webp', chaos: 0, top: '213px', left: '639px', description: ['퀄리티를 추가하여 반지나 목걸이, 허리띠에 부여된 물리 및 카오스 피해 속성을 향상합니다.', '기존 퀄리티 유형을 대체합니다.'] },
    ]
    const response = await poeGet('Currency')
    const priceRes: PriceResponse[] = response.data.lines
    const iconRes: IconResponse[] = response.data.items
    const catPriceRes = priceRes.filter(r => r.id.indexOf('catalyst') !== -1)
    const catIconRes = iconRes.filter(r => r.id.indexOf('catalyst') !== -1)
    catPriceRes.forEach(data => {
      list.forEach(cat => {
        if (cat.id === data.id) {
          cat.chaos = Number(Number(data.primaryValue || 0).toFixed(1))
        }
      })
    })
    catIconRes.forEach(data => {
      list.forEach(cat => {
        if (cat.id === data.id) {
          cat.icon = `https://web.poecdn.com${data.image}`
        }
      })
    })
    return list
  }
}
