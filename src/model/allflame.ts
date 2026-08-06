import {poeGet} from 'src/model/poeApi';
import {IconResponse, IItem, PriceResponse} from 'src/model/interface';
import {calcLevel} from 'src/model/priceLevel';

export class Allflame implements IItem {
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
    const list: Array<Allflame> = [
      // { id: 'syndicate-medallion', name: '연합 메달리온', icon: '', chaos: 0, level: 0, max: 0, top: '168px', left: '364px', description: [] },
      { id: 'allflame-ember-of-resplendence', name: '광휘의 올플레임 잉걸불', icon: '', chaos: 0, level: 0, max: 2, top: '306px', left: '234px', description: ['지역의 몬스터 무리 교체', '무리 몬스터가 아이템을 떨어뜨리지 않음', '무리 몬스터 처치 시 아이템 희귀도가 최대 400%까지 증가하고', '시간이 지나면서 서서히 감소'] },
      { id: 'allflame-ember-of-kulemak', name: '쿨레막의 올플레임 잉걸불', icon: '', chaos: 0, level: 0, max: 2, top: '306px', left: '320px', description: ['지역의 몬스터 무리 교체', '무리 우두머리가 무작위 연합 장비를 장착하고 있을', '가능성이 있는 무작위 연합 단원', '마지막 지도 보스가 쓰러진 후 무리 몬스터가 부활함'] },
      { id: 'allflame-ember-of-the-ethereal', name: '천상에 속한 자의 올플레임 잉걸불', icon: '', chaos: 0, level: 0, max: 4, top: '306px', left: '406px', description: ['지역의 몬스터 무리 교체', '무리 몬스터가 장비, 플라스크, 팅크를', '떨어뜨리지 않음'] },
      { id: 'allflame-ember-of-propagation', name: '증식의 올플레임 잉걸불', icon: '', chaos: 0, level: 0, max: 1, top: '306px', left: '494px', description: ['지역의 몬스터 무리 교체', '희귀일 때 죽는 무리 몬스터가 지역 내 다른', '희귀 몬스터에게 속성을 확산시킴'] },
      { id: 'allflame-ember-of-the-gilded', name: '도금된 자의 올플레임 잉걸불', icon: '', chaos: 0, level: 0, max: 4, top: '410px', left: '234px', description: ['지역의 몬스터 무리 교체', '무리 몬스터가 떨어뜨리는 장비가 골드로 전환'] },
      { id: 'allflame-ember-of-flesh', name: '살점의 올플레임 잉걸불', icon: '', chaos: 0, level: 0, max: 3, top: '410px', left: '320px', description: ['지역의 몬스터 무리 교체', '무리에 몬스터가 1마리 있음', '몬스터의 생명력 크게 증가'] },
      { id: 'allflame-ember-of-toads', name: '두꺼비의 올플레임 잉걸불', icon: '', chaos: 0, level: 0, max: 3, top: '410px', left: '406px', description: ['지역의 몬스터 무리 교체', '무리 몬스터가 무해한 두꺼비로 등장'] },
      { id: 'allflame-ember-of-the-wildwood', name: '야생림의 올플레임 잉걸불', icon: '', chaos: 0, level: 0, max: 2, top: '410px', left: '494px', description: ['지역의 몬스터 무리 교체', '무리 우두머리 처치 시 지도 보스가', '야생림 도깨비불로 강화'] },
    ]
    const response = await poeGet('AllflameEmber')
    const priceRes: PriceResponse[] = response.data.lines
    const iconRes: IconResponse[] = response.data.items
    priceRes.forEach(data => {
      list.forEach(item => {
        if (item.id === data.id) {
          item.chaos = Number(Number(data.primaryValue || 0).toFixed(1))
          item.level = calcLevel(data.primaryValue)
        }
      })
    })
    iconRes.forEach(data => {
      list.forEach(item => {
        if (item.id === data.id) {
          item.icon = `https://web.poecdn.com${data.image}`
        }
      })
    })
    const responseF = await poeGet('Fragment')
    const priceResF: PriceResponse[] = responseF.data.lines
    const iconResF: IconResponse[] = responseF.data.items
    const medallionPrice = priceResF.filter(r => r.id.indexOf('medallion') !== -1)
    const medallionIcon = iconResF.filter(r => r.id.indexOf('medallion') !== -1)
    medallionPrice.forEach(data => {
      list.forEach(item => {
        if (item.id === data.id) {
          item.chaos = Number(Number(data.primaryValue || 0).toFixed(1))
          item.level = calcLevel(data.primaryValue)
        }
      })
    })
    medallionIcon.forEach(data => {
      list.forEach(item => {
        if (item.id === data.id) {
          item.icon = `https://web.poecdn.com${data.image}`
        }
      })
    })
    return list
  }
}

