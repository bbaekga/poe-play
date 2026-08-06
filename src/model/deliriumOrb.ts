import {poeGet} from 'src/model/poeApi';
import {IconResponse, IItem, PriceResponse} from 'src/model/interface';
import {calcLevel} from 'src/model/priceLevel';

export class DeliriumOrb implements IItem {
  id = ''
  name = ''
  icon = ''
  chaos = 0
  level = 0
  max = 0
  top = ''
  left = ''
  description: Array<string> = []

  static async fetch() {
    const list: Array<DeliriumOrb> = [
      { id: 'simulacrum-splinter', name: '복제된 영토 파편', icon: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9EZWxpcml1bVNwbGludGVyIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/ae73b9445e/DeliriumSplinter.png', chaos: 0, level: 0, max: 0, top: '50px', left: '255px', description: ['300개의 파편을 조합하면 복제된 영토가 만들어집니다.'] },
      { id: 'simulacrum', name: '복제된 영토', icon: 'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvTWFwcy9EZWxpcml1bUZyYWdtZW50IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/92fba984ee/DeliriumFragment.png', chaos: 0, level: 0, max: 0, top: '50px', left: '474px', description: ['이 지역에서 발견하는 아이템 수량 5% 증가'] },
      { id: 'singular-delirium-orb', name: '비범한 환영의 오브', icon: '', chaos: 0, level: 0, max: 0, top: '117px', left: '44px', description: ['지도 아이템에 고유 아이템 보상 유형이 포함된 환영 현상을 추가합니다'] },
      { id: 'cartographers-delirium-orb', name: '지도제작자의 환영의 오브', icon: '', chaos: 0, level: 0, max: 0, top: '117px', left: '132px', description: ['지도 아이템에 지도 아이템 보상 유형이 포함된 환영 현상을 추가합니다'] },
      { id: 'skittering-delirium-orb', name: '달리는 환영의 오브', icon: '', chaos: 0, level: 0, max: 0, top: '117px', left: '598px', description: ['지도 아이템에 갑충석 보상 유형이 포함된 환영 현상을 추가합니다'] },
      { id: 'armoursmiths-delirium-orb', name: '갑옷제작자의 환영의 오브', icon: '', chaos: 0, level: 0, max: 0, top: '117px', left: '685px', description: ['지도 아이템에 방어구 보상 유형이 포함된 환영 현상을 추가합니다'] },

      { id: 'thaumaturges-delirium-orb', name: '마석학자의 환영의 오브', icon: '', chaos: 0, level: 0, max: 0, top: '204px', left: '44px', description: ['지도 아이템에 젬 보상 유형이 포함된 환영 현상을 추가합니다'] },
      { id: 'jewellers-delirium-orb', name: '쥬얼러 환영의 오브', icon: '', chaos: 0, level: 0, max: 0, top: '204px', left: '132px', description: ['지도 아이템에 장신구 보상 유형이 포함된 환영 현상을 추가합니다'] },
      { id: 'whispering-delirium-orb', name: '속삭이는 환영의 오브', icon: '', chaos: 0, level: 0, max: 0, top: '204px', left: '598px', description: ['지도 아이템에 에센스 보상 유형이 포함된 환영 현상을 추가합니다'] },
      { id: 'fragmented-delirium-orb', name: '조각난 환영의 오브', icon: '', chaos: 0, level: 0, max: 0, top: '204px', left: '685px', description: ['지도 아이템에 조각 보상 유형이 포함된 환영 현상을 추가합니다'] },

      { id: 'blacksmiths-delirium-orb', name: '대장장이의 환영의 오브', icon: '', chaos: 0, level: 0, max: 0, top: '290px', left: '44px', description: ['지도 아이템에 무기 보상 유형이 포함된 환영 현상을 추가합니다'] },
      { id: 'fine-delirium-orb', name: '양질의 환영의 오브', icon: '', chaos: 0, level: 0, max: 0, top: '290px', left: '132px', description: ['지도 아이템에 화폐 아이템 보상 유형이 포함된 환영 현상을 추가합니다'] },
      { id: 'diviners-delirium-orb', name: '예언자의 환영의 오브', icon: '', chaos: 0, level: 0, max: 0, top: '290px', left: '598px', description: ['지도 아이템에 점술 카드 보상 유형이 포함된 환영 현상을 추가합니다'] },
      { id: 'blighted-delirium-orb', name: '역병 걸린 환영의 오브', icon: '', chaos: 0, level: 0, max: 0, top: '290px', left: '685px', description: ['지도 아이템에 역병 보상 유형이 포함된 환영 현상을 추가합니다'] },
    ]
    const responseD = await poeGet('DeliriumOrb')
    const priceResD: PriceResponse[] = responseD.data.lines
    const iconResD: IconResponse[] = responseD.data.items
    priceResD.forEach(data => {
      list.forEach(orb => {
        if (orb.id === data.id) {
          orb.chaos = Number(Number(data.primaryValue || 0).toFixed(1))
          orb.level = calcLevel(data.primaryValue)
        }
      })
    })
    iconResD.forEach(data => {
      list.forEach(orb => {
        if (orb.id === data.id) {
          orb.icon = `https://web.poecdn.com${data.image}`
        }
      })
    })
    const responseF = await poeGet('Fragment')
    const priceResF: PriceResponse[] = responseF.data.lines
    const iconResF: IconResponse[] = responseF.data.items
    const simulacrumPrice = priceResF.filter(r => r.id.indexOf('simulacrum') !== -1)
    const simulacrumIcon = iconResF.filter(r => r.id.indexOf('simulacrum') !== -1)
    simulacrumPrice.forEach(data => {
      list.forEach(orb => {
        if (orb.id === data.id) {
          orb.chaos = Number(Number(data.primaryValue || 0).toFixed(1))
          orb.level = calcLevel(data.primaryValue)
        }
      })
    })
    simulacrumIcon.forEach(data => {
      list.forEach(orb => {
        if (orb.id === data.id) {
          orb.icon = `https://web.poecdn.com${data.image}`
        }
      })
    })
    return list
  }
}
