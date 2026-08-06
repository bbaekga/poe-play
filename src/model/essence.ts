import {poeGet} from 'src/model/poeApi';
import {IconResponse, IItem, PriceResponse} from 'src/model/interface';
import {calcLevel} from 'src/model/priceLevel';

export interface EssenceGroup {
  top: string
  left: string
  class: string
  list: Array<Essence>
}

// One horizontal group per attribute; tiers run low -> high within each list
// (center -> outward on the stash art). top/left are placeholders — align on screen.
const Greed: EssenceGroup = {
  top: '29px',
  left: '28px',
  class: '',
  list: Array<Essence>(
    { id: 'deafening-essence-of-greed', name: '귀를 찢는 탐욕의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-greed', name: '악을 쓰는 탐욕의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'screaming-essence-of-greed', name: '절규하는 탐욕의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'wailing-essence-of-greed', name: '울부짖는 탐욕의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'weeping-essence-of-greed', name: '흐느끼는 탐욕의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'muttering-essence-of-greed', name: '불평하는 탐욕의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'whispering-essence-of-greed', name: '속삭이는 탐욕의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
  )
}
const Contempt: EssenceGroup = {
  top: '90px',
  left: '30px',
  class: '',
  list: Array<Essence>(
    { id: 'deafening-essence-of-contempt', name: '귀를 찢는 경멸의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-contempt', name: '악을 쓰는 경멸의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'screaming-essence-of-contempt', name: '절규하는 경멸의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'wailing-essence-of-contempt', name: '울부짖는 경멸의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'weeping-essence-of-contempt', name: '흐느끼는 경멸의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'muttering-essence-of-contempt', name: '불평하는 경멸의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'whispering-essence-of-contempt', name: '속삭이는 경멸의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
  )
}
const Hatred: EssenceGroup = {
  top: '152px',
  left: '30px',
  class: '',
  list: Array<Essence>(
    { id: 'deafening-essence-of-hatred', name: '귀를 찢는 증오의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-hatred', name: '악을 쓰는 증오의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'screaming-essence-of-hatred', name: '절규하는 증오의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'wailing-essence-of-hatred', name: '울부짖는 증오의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'weeping-essence-of-hatred', name: '흐느끼는 증오의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'muttering-essence-of-hatred', name: '불평하는 증오의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'whispering-essence-of-hatred', name: '속삭이는 증오의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
  )
}
const Woe: EssenceGroup = {
  top: '215px',
  left: '30px',
  class: '',
  list: Array<Essence>(
    { id: 'deafening-essence-of-woe', name: '귀를 찢는 비애의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-woe', name: '악을 쓰는 비애의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'screaming-essence-of-woe', name: '절규하는 비애의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'wailing-essence-of-woe', name: '울부짖는 비애의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'weeping-essence-of-woe', name: '흐느끼는 비애의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'muttering-essence-of-woe', name: '불평하는 비애의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'whispering-essence-of-woe', name: '속삭이는 비애의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
  )
}
const Fear: EssenceGroup = {
  top: '279px',
  left: '30px',
  class: '',
  list: Array<Essence>(
    { id: 'deafening-essence-of-fear', name: '귀를 찢는 두려움의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-fear', name: '악을 쓰는 두려움의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'screaming-essence-of-fear', name: '절규하는 두려움의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'wailing-essence-of-fear', name: '울부짖는 두려움의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'weeping-essence-of-fear', name: '흐느끼는 두려움의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'muttering-essence-of-fear', name: '불평하는 두려움의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
  )
}
const Anger: EssenceGroup = {
  top: '341px',
  left: '30px',
  class: '',
  list: Array<Essence>(
    { id: 'deafening-essence-of-anger', name: '귀를 찢는 분노의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-anger', name: '악을 쓰는 분노의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'screaming-essence-of-anger', name: '절규하는 분노의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'wailing-essence-of-anger', name: '울부짖는 분노의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'weeping-essence-of-anger', name: '흐느끼는 분노의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'muttering-essence-of-anger', name: '불평하는 분노의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
  )
}
const Torment: EssenceGroup = {
  top: '403px',
  left: '30px',
  class: '',
  list: Array<Essence>(
    { id: 'deafening-essence-of-torment', name: '귀를 찢는 고뇌의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-torment', name: '악을 쓰는 고뇌의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'screaming-essence-of-torment', name: '절규하는 고뇌의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'wailing-essence-of-torment', name: '울부짖는 고뇌의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'weeping-essence-of-torment', name: '흐느끼는 고뇌의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'muttering-essence-of-torment', name: '불평하는 고뇌의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
  )
}
const Sorrow: EssenceGroup = {
  top: '465px',
  left: '30px',
  class: '',
  list: Array<Essence>(
    { id: 'deafening-essence-of-sorrow', name: '귀를 찢는 슬픔의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-sorrow', name: '악을 쓰는 슬픔의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'screaming-essence-of-sorrow', name: '절규하는 슬픔의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'wailing-essence-of-sorrow', name: '울부짖는 슬픔의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'weeping-essence-of-sorrow', name: '흐느끼는 슬픔의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'muttering-essence-of-sorrow', name: '불평하는 슬픔의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
  )
}
const Rage: EssenceGroup = {
  top: '527px',
  left: '30px',
  class: '',
  list: Array<Essence>(
    { id: 'deafening-essence-of-rage', name: '귀를 찢는 격노의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-rage', name: '악을 쓰는 격노의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'screaming-essence-of-rage', name: '절규하는 격노의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'wailing-essence-of-rage', name: '울부짖는 격노의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'weeping-essence-of-rage', name: '흐느끼는 격노의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
  )
}
const Suffering: EssenceGroup = {
  top: '590px',
  left: '30px',
  class: '',
  list: Array<Essence>(
    { id: 'deafening-essence-of-suffering', name: '귀를 찢는 고통의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-suffering', name: '악을 쓰는 고통의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'screaming-essence-of-suffering', name: '절규하는 고통의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'wailing-essence-of-suffering', name: '울부짖는 고통의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'weeping-essence-of-suffering', name: '흐느끼는 고통의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
  )
}
const Wrath: EssenceGroup = {
  top: '653px',
  left: '30px',
  class: '',
  list: Array<Essence>(
    { id: 'deafening-essence-of-wrath', name: '귀를 찢는 진노의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-wrath', name: '악을 쓰는 진노의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'screaming-essence-of-wrath', name: '절규하는 진노의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'wailing-essence-of-wrath', name: '울부짖는 진노의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'weeping-essence-of-wrath', name: '흐느끼는 진노의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
  )
}
const Doubt: EssenceGroup = {
  top: '715px',
  left: '30px',
  class: '',
  list: Array<Essence>(
    { id: 'deafening-essence-of-doubt', name: '귀를 찢는 의심의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-doubt', name: '악을 쓰는 의심의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'screaming-essence-of-doubt', name: '절규하는 의심의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'wailing-essence-of-doubt', name: '울부짖는 의심의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'weeping-essence-of-doubt', name: '흐느끼는 의심의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
  )
}
const Loathing: EssenceGroup = {
  top: '30px',
  left: '518px',
  class: '',
  list: Array<Essence>(
    { id: 'wailing-essence-of-loathing', name: '울부짖는 혐오의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'screaming-essence-of-loathing', name: '절규하는 혐오의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-loathing', name: '악을 쓰는 혐오의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'deafening-essence-of-loathing', name: '귀를 찢는 혐오의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 }
  )
}
const Zeal: EssenceGroup = {
  top: '92px',
  left: '518px',
  class: '',
  list: Array<Essence>(
    { id: 'wailing-essence-of-zeal', name: '울부짖는 열의의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'screaming-essence-of-zeal', name: '절규하는 열의의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-zeal', name: '악을 쓰는 열의의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'deafening-essence-of-zeal', name: '귀를 찢는 열의의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 }
  )
}
const Anguish: EssenceGroup = {
  top: '154px',
  left: '518px',
  class: '',
  list: Array<Essence>(
    { id: 'wailing-essence-of-anguish', name: '울부짖는 비통의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'screaming-essence-of-anguish', name: '절규하는 비통의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-anguish', name: '악을 쓰는 비통의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'deafening-essence-of-anguish', name: '귀를 찢는 비통의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 }
  )
}
const Spite: EssenceGroup = {
  top: '216px',
  left: '518px',
  class: '',
  list: Array<Essence>(
    { id: 'wailing-essence-of-spite', name: '울부짖는 악의의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'screaming-essence-of-spite', name: '절규하는 악의의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-spite', name: '악을 쓰는 악의의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'deafening-essence-of-spite', name: '귀를 찢는 악의의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 }
  )
}
const Scorn: EssenceGroup = {
  top: '280px',
  left: '580px',
  class: '',
  list: Array<Essence>(
    { id: 'screaming-essence-of-scorn', name: '절규하는 멸시의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-scorn', name: '악을 쓰는 멸시의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'deafening-essence-of-scorn', name: '귀를 찢는 멸시의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 }
  )
}
const Envy: EssenceGroup = {
  top: '342px',
  left: '580px',
  class: '',
  list: Array<Essence>(
    { id: 'screaming-essence-of-envy', name: '절규하는 선망의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-envy', name: '악을 쓰는 선망의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'deafening-essence-of-envy', name: '귀를 찢는 선망의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 }
  )
}
const Misery: EssenceGroup = {
  top: '404px',
  left: '580px',
  class: '',
  list: Array<Essence>(
    { id: 'screaming-essence-of-misery', name: '절규하는 비참의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-misery', name: '악을 쓰는 비참의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'deafening-essence-of-misery', name: '귀를 찢는 비참의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 }
  )
}
const Dread: EssenceGroup = {
  top: '467px',
  left: '580px',
  class: '',
  list: Array<Essence>(
    { id: 'screaming-essence-of-dread', name: '절규하는 불안의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'shrieking-essence-of-dread', name: '악을 쓰는 불안의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 },
    { id: 'deafening-essence-of-dread', name: '귀를 찢는 불안의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 }
  )
}
const Insanity: EssenceGroup = {
  top: '528px',
  left: '705px',
  class: '',
  list: Array<Essence>(
    { id: 'essence-of-insanity', name: '광기의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 }
  )
}
const Horror: EssenceGroup = {
  top: '591px',
  left: '705px',
  class: '',
  list: Array<Essence>(
    { id: 'essence-of-horror', name: '경악의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 }
  )
}
const Delirium: EssenceGroup = {
  top: '652px',
  left: '705px',
  class: '',
  list: Array<Essence>(
    { id: 'essence-of-delirium', name: '섬망의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 }
  )
}
const Hysteria: EssenceGroup = {
  top: '715px',
  left: '705px',
  class: '',
  list: Array<Essence>(
    { id: 'essence-of-hysteria', name: '발작의 에센스', icon: '', chaos: 0, level: 0, description: [], max: 1 }
  )
}

export class Essence implements IItem {
  id = ''
  name = ''
  icon = ''
  chaos = 0
  level = 0
  max = 0
  description: Array<string> = []

  static async fetch() {
    const groups = [
      Greed,
      Contempt,
      Hatred,
      Woe,
      Fear,
      Anger,
      Torment,
      Sorrow,
      Rage,
      Suffering,
      Wrath,
      Doubt,
      Loathing,
      Zeal,
      Anguish,
      Spite,
      Scorn,
      Envy,
      Misery,
      Dread,
      Insanity,
      Horror,
      Delirium,
      Hysteria,
    ]

    const response = await poeGet('Essence')
    const priceRes: PriceResponse[] = response.data.lines
    const iconRes: IconResponse[] = response.data.items
    priceRes.forEach(data => {
      groups.forEach(group => {
        group.list.forEach(essence => {
          if (essence.id === data.id) {
            essence.chaos = Number(Number(data.primaryValue || 0).toFixed(1))
            essence.level = calcLevel(data.primaryValue)
          }
        })
      })
    })
    iconRes.forEach(data => {
      groups.forEach(group => {
        group.list.forEach(essence => {
          if (essence.id === data.detailsId) {
            essence.icon = `https://web.poecdn.com${data.image}`
          }
        })
      })
    })
    return groups
  }
}

