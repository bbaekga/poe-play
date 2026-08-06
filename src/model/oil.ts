import {poeGet} from 'src/model/poeApi';
import {IconResponse, IItem, PriceResponse} from 'src/model/interface';

export class Oil implements IItem {
  id = ''
  name = ''
  icon = ''
  chaos = 0
  top = ''
  left = ''
  description: Array<string> = []

  static async fetch() {
    const list: Array<Oil> = [
      { id: 'clear-oil', name: '투명한 성유', icon: '', chaos: 0, top: '32px', left: '36px', description: ['몬스터의 이동 속도 12% 감소', '무리 규모 6% 증가'] },
      { id: 'sepia-oil', name: '적갈빛 성유', icon: '', chaos: 0, top: '32px', left: '110px', description: ['탑의 피해 25% 증폭', '무리 규모 6% 증가'] },
      { id: 'amber-oil', name: '호박빛 성유', icon: '', chaos: 0, top: '32px', left: '192px', description: ['탑 건설 및 업그레이드 비용 25% 감소', '무리 규모 6% 증가'] },
      { id: 'verdant-oil', name: '신록빛 성유', icon: '', chaos: 0, top: '32px', left: '271px', description: ['경험치 획득 45% 증가', '무리 규모 6% 증가'] },
      { id: 'teal-oil', name: '청록빛 성유', icon: '', chaos: 0, top: '32px', left: '350px', description: ['역병 몬스터 생성 속도 30% 가속', '인카운터 지속시간 50초 단축', '무리 규모 6% 증가'] },
      { id: 'azure-oil', name: '담청빛 성유', icon: '', chaos: 0, top: '32px', left: '428px', description: ['역병 상자 5개에 들어 있는 아이템의 종류에 행운 적용', '무리 규모 6% 증가'] },
      { id: 'indigo-oil', name: '남색 성유', icon: '', chaos: 0, top: '32px', left: '509px', description: ['역병 인카운터에 역병 보스 최대 3마리 추가 등장', '무리 규모 6% 증가'] },
      { id: 'tainted-oil', name: '더럽혀진 성유', icon: '', chaos: 0, top: '32px', left: '619px', description: [] },
      { id: 'violet-oil', name: '보랏빛 성유', icon: '', chaos: 0, top: '101px', left: '75px', description: ['역병 인카운터의 덩굴이 25%의 확률로 보상 상자 1개 추가 보유', '무리 규모 6% 증가'] },
      { id: 'crimson-oil', name: '진홍빛 성유', icon: '', chaos: 0, top: '101px', left: '153px', description: ['역병 상자 12개에 들어 있는 아이템의 종류에 행운 적용', '무리 규모 6% 증가'] },
      { id: 'black-oil', name: '검은빛 성유', icon: '', chaos: 0, top: '101px', left: '232px', description: ['무리 규모 6% 증가', '역병 상자에서 7% 확률로 보상 1개 추가 등장'] },
      { id: 'opalescent-oil', name: '오팔빛 성유', icon: '', chaos: 0, top: '101px', left: '312px', description: ['역병 상자 18개에 들어 있는 아이템의 종류에 행운 적용', '무리 규모 6% 증가'] },
      { id: 'silver-oil', name: '은빛 성유', icon: '', chaos: 0, top: '101px', left: '391px', description: ['이 지역에서 발견하는 아이템 수량 80% 증가', '무리 규모 6% 증가'] },
      { id: 'golden-oil', name: '금빛 성유', icon: '', chaos: 0, top: '101px', left: '471px', description: ['무리 규모 6% 증가', '역병 상자에서 30% 확률로 보상 1개 추가 등장'] },
      { id: 'reflective-oil', name: '투영 성유', icon: '', chaos: 0, top: '101px', left: '619px', description: [] },
      { id: 'prismatic-oil', name: '분광 성유', icon: '', chaos: 0, top: '101px', left: '698px', description: [] },
    ]
    const response = await poeGet('Oil')
    const priceRes: PriceResponse[] = response.data.lines
    const iconRes: IconResponse[] = response.data.items
    priceRes.forEach(data => {
      list.forEach(oil => {
        if (oil.id === data.id) {
          oil.chaos = Number(Number(data.primaryValue || 0).toFixed(1))
        }
      })
    })
    iconRes.forEach(data => {
      list.forEach(oil => {
        if (oil.id === data.id) {
          oil.icon = `https://web.poecdn.com${data.image}`
        }
      })
    })
    return list
  }
}
