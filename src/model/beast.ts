
export interface BeastResponse {
  id: string
  name: string
  detailsId: string
  icon: string
  chaosValue: number
  divineValue: number
}

export class Beast {
  id: string | null
  name: string | null
  chaos: string
  divine: string
  regExp: string
  selected: boolean

  constructor(data: Partial<BeastResponse>) {
    this.id = data.id || null
    this.name = data?.detailsId ? getBeastName(data.detailsId) : null
    this.chaos = (data?.chaosValue || 0).toFixed(1)
    this.divine = (data?.divineValue || 0).toFixed(2)
    this.regExp = data?.detailsId ? getRegExp(data.detailsId) : ''
    this.selected = false
  }
}

function getBeastName(id: string): string {
  let beastName = id
  beastInfos.forEach(b => {
    if (b.id === id) {
      beastName = b.name
    }
  })
  return beastName
}

function getRegExp(id: string): string {
  let regExp = ''
  beastInfos.forEach(b => {
    if (b.id === id) {
      regExp = b.regExp
    }
  })
  return regExp
}

/*

 */

export const beastInfos = [
  { id: 'black-morrigan', name: '검은 모리건', regExp: '은.모' },
  { id: 'fenumus-first-of-the-night', name: '밤의 최초, 페누무스', regExp: '밤.*페' },
  { id: 'saqawine-retch', name: '사카왈 레치', regExp: '왈.레' },
  { id: 'saqawine-rhex', name: '사카왈 렉스', regExp: '왈.렉' },
  { id: 'saqawine-rhoa', name: '사카왈 로아', regExp: '왈.로' },
  { id: 'saqawine-vulture', name: '사카왈 시체매', regExp: '왈.시' },
  { id: 'saqawine-cobra', name: '사카왈 코브라', regExp: '왈.코' },
  { id: 'saqawine-chimeral', name: '사카왈 키메랄', regExp: '왈.키' },
  { id: 'saqawine-blood-viper', name: '사카왈 피 독사', regExp: '왈.피' },
  { id: 'craiceann-first-of-the-deep', name: '심해의 최초, 크라칸', regExp: '심.*크' },
  { id: 'wild-brambleback', name: '야생 가시나무등', regExp: '생.가' },
  { id: 'wild-bristle-matron', name: '야생 털짐승 어미', regExp: '생.털' },
  { id: 'wild-hellion-alpha', name: '야생 헬리온 우두머리', regExp: '생.헬' },
  { id: 'primal-cystcaller', name: '원시 낭종소환사', regExp: '시.낭' },
  { id: 'primal-rhex-matriarch', name: '원시 렉스 어미', regExp: '시.렉' },
  { id: 'primal-crushclaw', name: '원시 박살발톱', regExp: '시.박' },
  { id: 'craicic-watcher', name: '크라칸의 감시자', regExp: '의.감' },
  { id: 'craicic-spider-crab', name: '크라칸의 거미게', regExp: '의.거' },
  { id: 'craicic-sand-spitter', name: '크라칸의 모래 전갈', regExp: '의.모' },
  { id: 'craicic-shield-crab', name: '크라칸의 방패게', regExp: '의.방' },
  { id: 'craicic-vassal', name: '크라칸의 봉신', regExp: '의.봉' },
  { id: 'craicic-savage-crab', name: '크라칸의 사나운 게', regExp: '의.사' },
  { id: 'craicic-squid', name: '크라칸의 오징어', regExp: '의.오' },
  { id: 'craicic-maw', name: '크라칸의 큰턱개구리', regExp: '의.큰' },
  { id: 'craicic-chimeral', name: '크라칸의 키메랄', regExp: '의.키' },
  { id: 'fenumal-widow', name: '페누무스 과부 거미', regExp: '스.과' },
  { id: 'fenumal-scrabbler', name: '페누무스 넝마주이', regExp: '스.넝' },
  { id: 'fenumal-queen', name: '페누무스 여왕', regExp: '스.여' },
  { id: 'fenumal-plagued-arachnid', name: '페누무스 역병 걸린 거미류', regExp: '스.역' },
  { id: 'fenumal-hybrid-arachnid', name: '페누무스 잡종 거미류', regExp: '스.잡' },
  { id: 'fenumal-scorpion', name: '페누무스 전갈', regExp: '스.전' },
  { id: 'fenumal-devourer', name: '페누무스 포식자', regExp: '스.포' },
  { id: 'farric-gargantuan', name: '페룰 가르강튀아', regExp: '룰.가' },
  { id: 'farric-ursa', name: '페룰 곰', regExp: '룰.곰' },
  { id: 'farric-pit-hound', name: '페룰 구덩이 사냥개', regExp: '룰.구' },
  { id: 'farric-magma-hound', name: '페룰 마그마 사냥개', regExp: '룰.마' },
  { id: 'farric-chieftain', name: '페룰 부족장', regExp: '룰.부' },
  { id: 'farric-frost-hellion-alpha', name: '페룰 서리 헬리온 우두머리', regExp: '룰.서' },
  { id: 'farric-lynx-alpha', name: '페룰 스라소니 우두머리', regExp: '룰.스' },
  { id: 'farric-goatman', name: '페룰 염소인간', regExp: '룰.염' },
  { id: 'farric-ape', name: '페룰 유인원', regExp: '룰.유' },
  { id: 'farric-tiger-alpha', name: '페룰 호랑이 우두머리', regExp: '룰.호' },
  { id: 'farric-flame-hellion-alpha', name: '페룰 화염 헬리온 우두머리', regExp: '룰.화' },
  { id: 'farric-taurus', name: '페룰 황소자리', regExp: '룰.황' },
  { id: 'farric-goliath', name: '페룰의 골리앗', regExp: '의.골' },
  { id: 'farric-wolf-alpha', name: '페룰의 늑대 우두머리', regExp: '의.늑' },
  { id: 'farrul-first-of-the-plains', name: '평야의 최초, 페룰', regExp: '평.*페' },
  { id: 'saqawal-first-of-the-sky', name: '하늘의 최초, 사카왈', regExp: '하.*사' },
  { id: 'vivid-watcher', name: '혈기 감시자', regExp: '기.감' },
  { id: 'vivid-vulture', name: '혈기 시체매', regExp: '기.시' },
  { id: 'vivid-abberarach', name: '혈기 애버라라크', regExp: '기.애' },
]
