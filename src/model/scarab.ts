import {poeGet} from 'src/model/poeApi';
import {IconResponse, IItem, PriceResponse} from 'src/model/interface';
import {calcLevel} from 'src/model/priceLevel';

export interface ScarabGroup {
  top: string
  left: string
  class: string
  list: Array<Scarab>
}

const Cartography: ScarabGroup = {
  top: '67px',
  left: '52px',
  class: '',
  list: Array<Scarab>(
    { id: 'cartography-scarab-of-escalation', name: '증대의 지도 제작 갑충석', icon: '', description: [ '지역에 영향을 주는 지도 속성 하나당 지역에서 발견하는 지도 10% 증가' ], chaos: 0, level: 0, max: 1 },
    { id: 'cartography-scarab-of-risk', name: '위험의 지도 제작 갑충석', icon: '', description: [ '지역에 무작위 속성 2개 추가' ], chaos: 0, level: 0, max: 1 },
    { id: 'cartography-scarab-of-the-multitude', name: '군중의 지도 제작 갑충석', icon: '', description: [ '지역에 난이도와 보상이 높은 몬스터로', '이루어진 무리가 8~12개 등장합니다. 이러한 몬스터는 떨어뜨리는 지도 수량이 300% 증가합니다.' ], chaos: 0, level: 0, max: 3 },
    { id: 'cartography-scarab-of-corruption', name: '타락의 지도 제작 갑충석', icon: '', description: [ '지역에서 발견하는 비-고유 지도가 속성 8개가 부여된 타락한 지도로 떨어짐' ], chaos: 0, level: 0, max: 1 },
  )
}
const Influencing: ScarabGroup = {
  top: '67px',
  left: '358px',
  class: '',
  list: Array<Scarab>(
    { id: 'influencing-scarab-of-the-shaper', name: '쉐이퍼의 영향력 갑충석', icon: '', description: [ '지역에 쉐이퍼 영향력 결과물 추가' ], chaos: 0, level: 0, max: 1 },
    { id: 'influencing-scarab-of-the-elder', name: '엘더의 영향력 갑충석', icon: '', description: [ '지역에 엘더 영향력 결과물 추가' ], chaos: 0, level: 0, max: 1 },
    { id: 'influencing-scarab-of-hordes', name: '군단의 영향력 갑충석', icon: '', description: [ '지역 내 영향을 받은 몬스터 무리의 무리 규모 40% 증가' ], chaos: 0, level: 0, max: 1 },
    { id: 'influencing-scarab-of-interference', name: '방해의 영향력 갑충석', icon: '', description: [ '지도 보스가 무작위 쉐이퍼 수호자, 엘더 수호자, 정복자 또는 결합 보스 대동', '14등급 이상의 지도에만 사용 가능' ], chaos: 0, level: 0, max: 1 }
  )
}
const Titanic: ScarabGroup = {
  top: '67px',
  left: '618px',
  class: '',
  list: Array<Scarab>(
    { id: 'titanic-scarab', name: '거대한 갑충석', icon: '', description: [ '지역 무리 규모 증가 1%당 고유 몬스터의 강인함, 피해, 떨어뜨리는 아이템의 희귀도 및 수량 1% 증가' ], chaos: 0, level: 0, max: 1 },
    { id: 'titanic-scarab-of-treasures', name: '보물의 거대한 갑충석', icon: '', description: [ '지역 내 고유 몬스터가 보상 1개 추가 보유', '지역 내 고유 몬스터의 강인함 30% 증가' ], chaos: 0, level: 0, max: 3 },
    { id: 'titanic-scarab-of-legend', name: '전설의 거대한 갑충석', icon: '', description: [ '지역 내 고유 몬스터가 몬스터 속성 4개 추가 보유' ], chaos: 0, level: 0, max: 1 }
  )
}
const Divination: ScarabGroup = {
  top: '127px',
  left: '52px',
  class: '',
  list: Array<Scarab>(
    { id: 'divination-scarab-of-the-cloister', name: '회랑의 점술 갑충석', icon: '', description: [ '지역에 도이드리의 헌신자 무리 8~12개가 추가로 등장', '도이드리의 헌신자가 카드 묶음을 떨어뜨릴 확률 1% 추가' ], chaos: 0, level: 0, max: 5 },
    { id: 'divination-scarab-of-plenty', name: '풍부함의 점술 갑충석', icon: '', description: [ '지역 내 점술 카드를 떨어뜨릴 확률이 1000% 증가한', '점술에 닿은 마법 몬스터 무리 6~10개 추가 등장' ], chaos: 0, level: 0, max: 5 },
    { id: 'divination-scarab-of-pilfering', name: '훔쳐냄의 점술 갑충석', icon: '', description: [ '지역에서 발견하는 점술 카드를 지도의 마지막 보스가 강탈', '지도의 해당 마지막 보스가 강탈한 점술 카드가 많을수록', '난이도가 높아지고 마지막 보스가 주는 피해 증가', '지도의 해당 마지막 보스 처치 시 강탈한 모든 점술 카드 복제' ], chaos: 0, level: 0, max: 1 }
  )
}
const Trarthan: ScarabGroup = {
  top: '127px',
  left: '358px',
  class: '',
  list: Array<Scarab>(
    { id: 'trarthan-scarab', name: '트라투스 갑충석', icon: '', description: [ '지역에 용병 서식' ], chaos: 0, level: 0, max: 1 },
    { id: 'trarthan-scarab-of-infamy', name: '악명의 트라투스 갑충석', icon: '', description: [ '지역에서 발견하는 용병이 악명 높은 용병', '지역에서 발견하는 용병이 황야 용병 두 명과 동행함' ], chaos: 0, level: 0, max: 1 },
    { id: 'trarthan-scarab-of-renown', name: '명성의 트라투스 갑충석', icon: '', description: [ '지역에서 발견하는 용병이 가진 모든 장비 아이템이 고유 아이템임' ], chaos: 0, level: 0, max: 1 },
    { id: 'trarthan-scarab-of-surprising-alliances', name: '의외의 동맹의 트라투스 갑충석', icon: '', description: [ '지역 내 황야 탈주 유배자가 50% 확률로 황야 용병과 동행함', '지역 내 황야 용병의 수에 따라 황야 용병의 난이도 증가' ], chaos: 0, level: 0, max: 1 }
  )
}
const Bestiary: ScarabGroup = {
  top: '186px',
  left: '52px',
  class: '',
  list: Array<Scarab>(
    { id: 'bestiary-scarab', name: '야수 도감 갑충석', icon: '', description: [ '지역에 아인하르 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'bestiary-scarab-of-the-herd', name: '떼의 야수 도감 갑충석', icon: '', description: [ '아인하르가 등장하는 지역에 붉은 야수 5마리 추가 등장' ], chaos: 0, level: 0, max: 2 },
    { id: 'bestiary-scarab-of-duplicating', name: '복제의 야수 도감 갑충석', icon: '', description: [ '지역 내에서 포획하는 야수의 복제본 생성' ], chaos: 0, level: 0, max: 1 }
  )
}
const Abyss: ScarabGroup = {
  top: '186px',
  left: '358px',
  class: '',
  list: Array<Scarab>(
    { id: 'abyss-scarab', name: '심연 갑충석', icon: '', description: [ '지역에 심연 1개 추가 등장' ], chaos: 0, level: 0, max: 5 },
    { id: 'abyss-scarab-of-multitudes', name: '군중의 심연 갑충석', icon: '', description: [ '먹은 영혼 하나당 지역 내 심연 절벽길에서 생성되는 몬스터 100% 증가' ], chaos: 0, level: 0, max: 2 },
    { id: 'abyss-scarab-of-crystals', name: '수정의 심연 갑충석', icon: '', description: [ '보상을 제공하지 않는 지역 내 심연 구덩이가 그 대신 심연 수정 생성' ], chaos: 0, level: 0, max: 1 },
    { id: 'abyss-scarab-of-descending', name: '하강의 심연 갑충석', icon: '', description: [ '지역에 심연 지하 1개 추가 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'abyss-scarab-of-the-consort', name: '배우자의 심연 갑충석', icon: '', description: [ '지역 내 심연 구덩이에서 심연의 배우자 1마리 생성' ], chaos: 0, level: 0, max: 1 }
  )
}
const Betrayal: ScarabGroup = {
  top: '247px',
  left: '52px',
  class: '',
  list: Array<Scarab>(
    { id: 'betrayal-scarab', name: '배신 갑충석', icon: '', description: [ '지역에 준 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'betrayal-scarab-of-the-allflame', name: '올플레임의 배신 갑충석', icon: '', description: [ '지역 내 올플레임 잉걸불이 교체하는 몬스터 무리의 수 75% 증가' ], chaos: 0, level: 0, max: 1 },
    { id: 'betrayal-scarab-of-reinforcements', name: '보강의 배신 갑충석', icon: '', description: [ '지역 내 불멸자 연합 단원이 지원군을 동반할 확률 50% 증가' ], chaos: 0, level: 0, max: 1 },
    { id: 'betrayal-scarab-of-unbreaking', name: '원상 복구의 배신 갑충석', icon: '', description: [ '지역에 있는 심문당한 불멸자 연합 대상이 50%의 확률로', '심문 완료 시 계급을 잃지 않음' ], chaos: 0, level: 0, max: 2 }
  )
}
const Blight: ScarabGroup = {
  top: '247px',
  left: '358px',
  class: '',
  list: Array<Scarab>(
    { id: 'blight-scarab', name: '역병 갑충석', icon: '', description: [ '지역에 역병 인카운터 1개 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'blight-scarab-of-the-blightheart', name: '메마른 심장의 역병 갑충석', icon: '', description: [ '지역 내 역병 인카운터에 역병 걸린 상자 1개 등장', '지역 내 역병 인카운터에서 적 웨이브 추가로 생성', '역병 걸린 적을 많이 처치할수록 지역 내 역병 걸린 상자의', '크기가 커지고 보상이 늘어남' ], chaos: 0, level: 0, max: 1 },
    { id: 'blight-scarab-of-blooming', name: '개화의 역병 갑충석', icon: '', description: [ '지역 내 역병 인카운터에서 고유 보스 최대 3마리 추가 등장', '역병 인카운터 내 고유 적의 생명력 100% 증가', '지역에서 발견하는 14등급 이상의 역병 걸린 지도가 역병에 유린당한 지도로 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'blight-scarab-of-invigoration', name: '고무의 역병 갑충석', icon: '', description: [ '지역 내 강화의 탑이 각각 범위 내 역병 몬스터의', '난이도와 보상을 증가시킴' ], chaos: 0, level: 0, max: 1 }
  )
}
const Incursion: ScarabGroup = {
  top: '306px',
  left: '52px',
  class: '',
  list: Array<Scarab>(
    { id: 'incursion-scarab', name: '기습 갑충석', icon: '', description: [ '지역에 알바 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'incursion-scarab-of-invasion', name: '침략의 기습 갑충석', icon: '', description: [ '지역에 기습 몬스터 무리 12~16개 추가 등장' ], chaos: 0, level: 0, max: 3 },
    { id: 'incursion-scarab-of-champions', name: '용사의 기습 갑충석', icon: '', description: [ '35%의 확률로 지역 내 기습의 모든 몬스터가 마법 이상으로 등장', '지역 내 기습의 무리 규모 15% 증가' ], chaos: 0, level: 0, max: 2 },
    { id: 'incursion-scarab-of-timelines', name: '시간선의 기습 갑충석', icon: '', description: [ '지역에서 처치하는 최종 건축가가 아이템화된 사원을 떨어뜨림', '지역에서 떨어지는 아이템화된 사원이 현재 사원 구조에 기반해 생성되지만, 방의 등급은 무작위 변경' ], chaos: 0, level: 0, max: 1 }
  )
}
const Breach: ScarabGroup = {
  top: '306px',
  left: '358px',
  class: '',
  list: Array<Scarab>(
    { id: 'breach-scarab-of-the-hive', name: '벌레집의 균열 갑충석', icon: '', description: [ '지역에 균열 벌레집 1개 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'breach-scarab-of-instability', name: '불안정의 균열 갑충석', icon: '', description: [ '지역에 불안정한 균열 2개 추가 등장' ], chaos: 0, level: 0, max: 2 },
    { id: 'breach-scarab-of-the-marshal', name: '총사령관의 균열 갑충석', icon: '', description: [ '지역 내 불안정한 균열에 보스 등장', '지역 내 벌레집이 벌레집 요새로 이어짐' ], chaos: 0, level: 0, max: 1 },
    { id: 'breach-scarab-of-the-incensed-swarm', name: '분개한 무리의 균열 갑충석', icon: '', description: [ '지역 내 아일리트의 스킬이 대신 벌레집을 격앙시켜, 이후 웨이브의 난이도와', '보상을 증가시킴' ], chaos: 0, level: 0, max: 1 },
    { id: 'breach-scarab-of-resonant-cascade', name: '공명하는 폭포의 균열 갑충석', icon: '', description: [ '이미 열린 불안정한 균열 하나당 지역 내 불안정한 균열이 10% 더 빠름', '이미 열린 불안정한 균열의 수에 따라 지역 내 불안정한 균열 몬스터의', '난이도와 보상 증가' ], chaos: 0, level: 0, max: 1 }
  )
}
const Sulphite: ScarabGroup = {
  top: '366px',
  left: '52px',
  class: '',
  list: Array<Scarab>(
    { id: 'sulphite-scarab', name: '아황산염 갑충석', icon: '', description: [ '지역에 니코 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'sulphite-scarab-of-fumes', name: '연기의 아황산염 갑충석', icon: '', description: [ '지도 지역에서 발견하는 아황산염이 격앙시키는 연기 방출', '격앙시키는 연기의 영향을 받는 적은 아이템 수량 50% 증가', '지도 내 아황산염을 남동석 광산의 몬스터가 방어' ], chaos: 0, level: 0, max: 1 }
  )
}
const Delirium: ScarabGroup = {
  top: '366px',
  left: '358px',
  class: '',
  list: Array<Scarab>(
    { id: 'delirium-scarab', name: '환영 갑충석', icon: '', description: [ '지역에 환영의 거울 1개 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'delirium-scarab-of-mania', name: '광증의 환영 갑충석', icon: '', description: [ '지역에서 환영 보상 막대가 100% 빨리 채워짐', '지역 내 환영이 거울과의 거리에 비례해 50% 더 빠르게 증가' ], chaos: 0, level: 0, max: 2 },
    { id: 'delirium-scarab-of-paranoia', name: '편집증의 환영 갑충석', icon: '', description: [ '지역 내 환영 인카운터가 보상 유형 2개 추가 생성' ], chaos: 0, level: 0, max: 5 },
    { id: 'delirium-scarab-of-neuroses', name: '신경증의 환영 갑충석', icon: '', description: [ '지역 내 환영 인카운터에서 모든 고유 환영 보스 등장', '지역 내 환영 보상 유형이 고유 환영 보스 처치 시 +1 획득', '11등급 이상의 지도에만 사용 가능' ], chaos: 0, level: 0, max: 1 },
    { id: 'delirium-scarab-of-delusions', name: '망상의 환영 갑충석', icon: '', description: [ '지역에서 발견하는 지도에 환영 현상 등장' ], chaos: 0, level: 0, max: 1 }
  )
}
const Ambush: ScarabGroup = {
  top: '426px',
  left: '52px',
  class: '',
  list: Array<Scarab>(
    { id: 'ambush-scarab', name: '매복 갑충석', icon: '', description: [ '지역 내 금고 4개 추가' ], chaos: 0, level: 0, max: 3 },
    { id: 'ambush-scarab-of-hidden-compartments', name: '비밀 공간의 매복 갑충석', icon: '', description: [ '지역 내 금고를 15%의 확률로 다시 열 수 있음' ], chaos: 0, level: 0, max: 1 },
    { id: 'ambush-scarab-of-potency', name: '잠재력의 매복 갑충석', icon: '', description: [ '지역 내 금고의 비고정 속성 효과 75% 증가' ], chaos: 0, level: 0, max: 1 },
    { id: 'ambush-scarab-of-containment', name: '봉쇄의 매복 갑충석', icon: '', description: [ '지역에 다수의 금고 추가', '지역 내 몬스터가 매복 중' ], chaos: 0, level: 0, max: 1 },
    { id: 'ambush-scarab-of-discernment', name: '분별의 매복 갑충석', icon: '', description: [ '지역 내 금고가 보다 희귀한 종류일 확률이 높아짐' ], chaos: 0, level: 0, max: 1 }
  )
}
const Expedition: ScarabGroup = {
  top: '426px',
  left: '358px',
  class: '',
  list: Array<Scarab>(
    { id: 'expedition-scarab', name: '탐험 갑충석', icon: '', description: [ '지역에 탐험 인카운터 1개 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'expedition-scarab-of-runefinding', name: '룬 탐색의 탐험 갑충석', icon: '', description: [ '지역 내 탐험 인카운터의 룬 몬스터', '표시물 수량 100% 증가' ], chaos: 0, level: 0, max: 2 },
    { id: 'expedition-scarab-of-verisium-powder', name: '베리시움 화약의 탐험 갑충석', icon: '', description: [ '지역 내 탐험 인카운터의 폭발물 수량 50% 증가', '폭발물 반경 80 증가' ], chaos: 0, level: 0, max: 1 },
    { id: 'expedition-scarab-of-infusion', name: '주입의 탐험 갑충석', icon: '', description: [ '지역에서 발견하는 일지가 항상 고정 속성 4개 보유', '폭파한 유적의 수에 따라 탐험 몬스터의 난이도 및 보상 증가' ], chaos: 0, level: 0, max: 1 },
    { id: 'expedition-scarab-of-archaeology', name: '고고학의 탐험 갑충석', icon: '', description: [ '지역 내 탐험 인카운터의 유적에 접미어 및 접두어 2개 추가' ], chaos: 0, level: 0, max: 1 }
  )
}
const Anarchy: ScarabGroup = {
  top: '486px',
  left: '52px',
  class: '',
  list: Array<Scarab>(
    { id: 'anarchy-scarab', name: '혼란 갑충석', icon: '', description: [ '지역에 탈주 유배자 5명 추가 등장' ], chaos: 0, level: 0, max: 5 },
    { id: 'anarchy-scarab-of-gigantification', name: '비대화의 혼란 갑충석', icon: '', description: [ '지역 내 황야 탈주 유배자가 30%의 확률로 탈주 거인으로 등장' ], chaos: 0, level: 0, max: 2 },
    { id: 'anarchy-scarab-of-partnership', name: '협력의 혼란 갑충석', icon: '', description: [ '지역 내 황야 탈주 유배자가 50%의 확률로 쌍으로 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'anarchy-scarab-of-the-exceptional', name: '특출난 자의 혼란 갑충석', icon: '', description: [ '지역에 특출난 탈주 유배자 1명 추가 등장' ], chaos: 0, level: 0, max: 2 }
  )
}
const Harvest: ScarabGroup = {
  top: '486px',
  left: '358px',
  class: '',
  list: Array<Scarab>(
    { id: 'harvest-scarab', name: '수확 갑충석', icon: '', description: [ '지역에 신성한 숲 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'harvest-scarab-of-doubling', name: '복제의 수확 갑충석', icon: '', description: [ '지역 내 수확 몬스터가 떨어뜨리는 생기가 복제됨', '지역 내 수확 몬스터의 생명력 100% 증폭' ], chaos: 0, level: 0, max: 1 },
    { id: 'harvest-scarab-of-cornucopia', name: '풍요의 뿔의 수확 갑충석', icon: '', description: [ '지역에 신성한 숲이 등장할 시, 가능할 경우 신성한 숲에 각 유형의 4등급 씨앗 최대 1개씩 추가' ], chaos: 0, level: 0, max: 1 }
  )
}
const Beyond: ScarabGroup = {
  top: '545px',
  left: '52px',
  class: '',
  list: Array<Scarab>(
    { id: 'beyond-scarab', name: '이계 갑충석', icon: '', description: [ '지역에서 서로 가까이 있는 적을 처치하면 이계 몬스터를 불러옴' ], chaos: 0, level: 0, max: 1 },
    { id: 'beyond-scarab-of-haemophilia', name: '혈우병의 이계 갑충석', icon: '', description: [ '지역 내 이계 포탈의 병합 범위 50% 증가', '지역 내에서 이계 희귀 몬스터를 처치하는 캐릭터들이 30% 확률로 20초 동안 몬스터의 속성을 획득함' ], chaos: 0, level: 0, max: 2 },
    { id: 'beyond-scarab-of-resurgence', name: '재기의 이계 갑충석', icon: '', description: [ '지역 내에서 생성되는 이계 보스가 다른 진영의 이계 보스 대동', '지역 내 이계 보스가 떨어뜨리는 더럽혀진 화폐 20% 증가', '지역 내 이계 포탈이 고유 보스를 생성할 확률 30% 증가' ], chaos: 0, level: 0, max: 1 },
    { id: 'beyond-scarab-of-the-invasion', name: '침략의 이계 갑충석', icon: '', description: [ '지역 내 희귀 및 고유 몬스터 처치 시 이계 포탈 8~12개 추가 생성' ], chaos: 0, level: 0, max: 1 }
  )
}
const Kalguur: ScarabGroup = {
  top: '545px',
  left: '358px',
  class: '',
  list: Array<Scarab>(
    { id: 'kalguuran-scarab', name: '칼구르 갑충석', icon: '', description: [ '지역에 광맥 2개 추가 등장' ], chaos: 0, level: 0, max: 2 },
    { id: 'kalguuran-scarab-of-guarded-riches', name: '보호받는 재물의 칼구르 갑충석', icon: '', description: [ '지역 내 광맥을 방어하는 몬스터가 마법 이상으로 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'kalguuran-scarab-of-refinement', name: '정제의 칼구르 갑충석', icon: '', description: [ '지역 내 광맥이 광석 채광을 지시하는 대신 제련한 주괴 부여' ], chaos: 0, level: 0, max: 1 },
    { id: 'kalguuran-scarab-of-enriching', name: '윤택의 칼구르 갑충석', icon: '', description: [ '지역 내에서 완료하는 광맥 하나당', '광맥을 지키는 몬스터의 난이도와 보상이 증가하고', '광맥에 포함된 광석 15% 증가' ], chaos: 0, level: 0, max: 1 }
  )
}
const Domination: ScarabGroup = {
  top: '605px',
  left: '52px',
  class: '',
  list: Array<Scarab>(
    { id: 'domination-scarab', name: '지배 갑충석', icon: '', description: [ '지역에 성소 3개 추가 등장' ], chaos: 0, level: 0, max: 4 },
    { id: 'domination-scarab-of-apparitions', name: '유령의 지배 갑충석', icon: '', description: [ '지역에 유령 성소 2개 추가 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'domination-scarab-of-evolution', name: '진화의 지배 갑충석', icon: '', description: [ '지역에 진화의 성소 1개 추가 등장' ], chaos: 0, level: 0, max: 2 },
    { id: 'domination-scarab-of-terrors', name: '공포의 지배 갑충석', icon: '', description: [ '지역 내 성소를 1마리의 아틀라스 보스가 방어', '지도의 마지막 보스에 대한 속성이 이 아틀라스 보스에도 적용' ], chaos: 0, level: 0, max: 1 }
  )
}
const Legion: ScarabGroup = {
  top: '605px',
  left: '358px',
  class: '',
  list: Array<Scarab>(
    { id: 'legion-scarab', name: '군단 갑충석', icon: '', description: [ '지역에 추가 군단 인카운터 등장' ], chaos: 0, level: 0, max: 5 },
    { id: 'legion-scarab-of-officers', name: '장교의 군단 갑충석', icon: '', description: [ '지역 내 군단 진영에 병장 5명 추가 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'legion-scarab-of-treasures', name: '보물의 군단 갑충석', icon: '', description: [ '지역 내 군단 상자가 상자 개방 시에 정체 상태에서 해방되는', '군단 몬스터에게 20% 확률로 보상을 확산시킴', '보상을 획득한 군단 몬스터는 난이도 증가' ], chaos: 0, level: 0, max: 3 },
    { id: 'legion-scarab-of-eternal-conflict', name: '영원한 분쟁의 군단 갑충석', icon: '', description: [ '지역 내 군단 몬스터를 여러 번 깨울 수 있음', '지역 내 군단 몬스터를 깨울 때마다 난이도와 보상 증가' ], chaos: 0, level: 0, max: 1 }
  )
}
const Essence: ScarabGroup = {
  top: '665px',
  left: '52px',
  class: '',
  list: Array<Scarab>(
    { id: 'essence-scarab', name: '에센스 갑충석', icon: '', description: [ '지역에 갇힌 몬스터 3마리 추가 등장' ], chaos: 0, level: 0, max: 5 },
    { id: 'essence-scarab-of-ascent', name: '상승의 에센스 갑충석', icon: '', description: [ '지역에서 발견하는 에센스가 1등급 높게 발견됨' ], chaos: 0, level: 0, max: 1 },
    { id: 'essence-scarab-of-stability', name: '안정의 에센스 갑충석', icon: '', description: [ '지역 내에서 에센스 타락 시 에센스를 업그레이드 또는', '변화시키는 결과만 가능' ], chaos: 0, level: 0, max: 1 },
    { id: 'essence-scarab-of-calcification', name: '석회화의 에센스 갑충석', icon: '', description: [ '지역 내 자연적으로 서식하는 희귀 몬스터가 에센스에 갇힘' ], chaos: 0, level: 0, max: 1 },
    { id: 'essence-scarab-of-adaptation', name: '적응의 에센스 갑충석', icon: '', description: [ '지역 내 갇힌 몬스터가 풀려나면 지역 내 다른 갇힌 몬스터에게 무작위 에센스 속성 부여', '에센스 속성의 수에 따라 지역 내 갇힌 몬스터의', '난이도와 보상 증가' ], chaos: 0, level: 0, max: 1 }
  )
}
const Ritual: ScarabGroup = {
  top: '665px',
  left: '358px',
  class: '',
  list: Array<Scarab>(
    { id: 'ritual-scarab-of-selectiveness', name: '선택의 의식 갑충석', icon: '', description: [ '지역 내 의식 제단에서 헌정품을 무작위 변경할 때 첫 2회는 비용 없음', '지역 내 의식 제단에서 헌정품을 2회 추가로 무작위 변경 가능' ], chaos: 0, level: 0, max: 2 },
    { id: 'ritual-scarab-of-wisps', name: '도깨비불의 의식 갑충석', icon: '', description: [ '지역 내 의식 제단이 야생림 도깨비불 생성', '야생림 도깨비불이 주변의 플레이어들에게 공물 점수 획득량 100% 증가 부여' ], chaos: 0, level: 0, max: 1 },
    { id: 'ritual-scarab-of-abundance', name: '풍부함의 의식 갑충석', icon: '', description: [ '지역 내 의식으로 얻는 헌정품 100% 증가' ], chaos: 0, level: 0, max: 2 },
    { id: 'ritual-scarab-of-corpses', name: '시신의 의식 갑충석', icon: '', description: [ '지역 내 의식에 희귀 아이템화된 시신 몬스터 1마리 추가 등장' ], chaos: 0, level: 0, max: 2 }
  )
}
const Torment: ScarabGroup = {
  top: '724px',
  left: '52px',
  class: '',
  list: Array<Scarab>(
    { id: 'torment-scarab', name: '고통 갑충석', icon: '', description: [ '지역에 고통받는 혼백 4마리 추가 등장', '사로잡힌 몬스터 처치 시 지역 내', '고통받는 혼백이 10%의 확률로 해방되고', '사로잡힌 몬스터 1마리를 파냄' ], chaos: 0, level: 0, max: 2 },
    { id: 'torment-scarab-of-peculiarity', name: '기이함의 고통 갑충석', icon: '', description: [ '지도 내 고통받는 혼백이 특이한 변화형으로 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'torment-scarab-of-possession', name: '사로잡힘의 고통 갑충석', icon: '', description: [ '지역 내 희귀 몬스터가 1/4 확률로 최대 3마리의 고통받는 혼백에게 사로잡힘' ], chaos: 0, level: 0, max: 3 }
  )
}
const Ultimatum: ScarabGroup = {
  top: '724px',
  left: '358px',
  class: '',
  list: Array<Scarab>(
    { id: 'ultimatum-scarab', name: '결전 갑충석', icon: '', description: [ '지역에 결전 인카운터 1개 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'ultimatum-scarab-of-bribing', name: '매수의 결전 갑충석', icon: '', description: [ '결전 몬스터가 주는 경험치 150% 증가', '결전 인카운터가 라운드 2개를 추가로 완료한 것처럼 보상을 줌' ], chaos: 0, level: 0, max: 2 },
    { id: 'ultimatum-scarab-of-dueling', name: '결투의 결전 갑충석', icon: '', description: [ '가능할 경우 지역 내 결전 인카운터가 항상 고유 보스로 이어짐' ], chaos: 0, level: 0, max: 1 },
    { id: 'ultimatum-scarab-of-catalysing', name: '기폭의 결전 갑충석', icon: '', description: [ '지역 내 결전 인카운터에서 지도 소유자가', '보상으로 기폭제만 획득 가능' ], chaos: 0, level: 0, max: 1 },
    { id: 'ultimatum-scarab-of-inscription', name: '새김의 결전 갑충석', icon: '', description: [ '기폭제를 주는 지역 내 결전 인카운터 보상이', '지도 소유자에게 기폭제가 아닌 새겨진 결전을 줌' ], chaos: 0, level: 0, max: 1 }
  )
}
const Misc: ScarabGroup = {
  top: '217px',
  left: '661px',
  class: 'vertical',
  list: Array<Scarab>(
    { id: 'scarab-of-monstrous-lineage', name: '기괴한 혈통의 갑충석', icon: '', description: [ '마법 무리 규모 40% 증가' ], chaos: 0, level: 0, max: 2 },
    { id: 'scarab-of-adversaries', name: '적수의 갑충석', icon: '', description: [ '지역에 복제된 희귀 몬스터를 포함한 무리 4개 추가 등장' ], chaos: 0, level: 0, max: 2 },
    { id: 'scarab-of-divinity', name: '신성의 갑충석', icon: '', description: [ '지역 내 판테온의 손길에 닿은 희귀 몬스터 최대 3마리 추가', '판테온의 손길에 닿은 몬스터가 생성하는 유령이 주는 피해 100% 증가' ], chaos: 0, level: 0, max: 3 },
    { id: 'scarab-of-the-dextral', name: '우측의 갑충석', icon: '', description: [ '지역 접미어 속성의 효과 100% 증가', '지역 접두어 속성의 효과가 적용되지 않음' ], chaos: 0, level: 0, max: 1 },
    { id: 'scarab-of-the-sinistral', name: '좌측의 갑충석', icon: '', description: [ '지역 접두어 속성의 효과 100% 증가', '지역 접미어 속성의 효과가 적용되지 않음' ], chaos: 0, level: 0, max: 1 },
    { id: 'scarab-of-wisps', name: '도깨비불의 갑충석', icon: '', description: [ '지역 내 몬스터가 일정 확률로 야생림 도깨비불 2000마리로 강화' ], chaos: 0, level: 0, max: 2 },
    { id: 'scarab-of-radiant-storms', name: '찬란한 폭풍의 갑충석', icon: '', description: [ '지역에 찬연한 폭풍 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'scarab-of-stability', name: '안정의 갑충석', icon: '', description: [ '지역으로 이어지는 포탈이 50%의 확률로 사용해도 소모되지 않음' ], chaos: 0, level: 0, max: 1 },
  )
}
const Horned: ScarabGroup = {
  top: '243px',
  left: '720px',
  class: 'vertical',
  list: Array<Scarab>(
    { id: 'horned-scarab-of-bloodlines', name: '혈맹의 뿔 달린 갑충석', icon: '', description: [ '지역의 마법 몬스터 150% 증가', '지역 내 마법 몬스터가 속성 1개를 추가로 보유' ], chaos: 0, level: 0, max: 1 },
    { id: 'horned-scarab-of-nemeses', name: '천벌의 뿔 달린 갑충석', icon: '', description: [ '지역 내 희귀 몬스터가 속성 2개 추가 보유' ], chaos: 0, level: 0, max: 2 },
    { id: 'horned-scarab-of-preservation', name: '보전의 뿔 달린 갑충석', icon: '', description: [ '다른 갑충석들이 사용해도 소모되지 않음' ], chaos: 0, level: 0, max: 1 },
    { id: 'horned-scarab-of-awakening', name: '각성의 뿔 달린 갑충석', icon: '', description: [ '16등급 이상 지역에 무작위 메이븐 초대의 보스 등장' ], chaos: 0, level: 0, max: 1 },
    { id: 'horned-scarab-of-tradition', name: '전통의 뿔 달린 갑충석', icon: '', description: [ '지역 내 모든 희귀 및 고유 몬스터가 떨어뜨리는 아이템이', '보상 속성에 의해 변화됨' ], chaos: 0, level: 0, max: 1 },
    { id: 'horned-scarab-of-glittering', name: '번쩍임의 뿔 달린 갑충석', icon: '', description: [ '지역 내 플레이어가 처치한 몬스터 수에 따라 아이템 희귀도가 최대 400%까지', '증가하고 시간이 지나면서 서서히 감소' ], chaos: 0, level: 0, max: 1 },
    { id: 'horned-scarab-of-pandemonium', name: '혼란 유발의 뿔 달린 갑충석', icon: '', description: [ '지역 내 몬스터 무리가 15% 확률로 무작위 아틀라스 보스 1마리로 등장', '마지막 지도 보스에 대한 속성이 해당 아틀라스 보스에도 적용' ], chaos: 0, level: 0, max: 1 },
  )
}

export class Scarab implements IItem {
  id = ''
  name = ''
  icon = ''
  chaos = 0
  level = 0
  max = 0
  description: Array<string> = []

  static async fetch() {
    // Misc and Horned must stay last: ScarabTab.vue splices the final two
    // groups off as the vertical columns.
    const groups = [
      Cartography, Influencing,
      Titanic, Divination,
      Bestiary, Abyss,
      Betrayal, Blight,
      Sulphite, Breach,
      Incursion, Delirium,
      Anarchy, Expedition,
      Beyond, Harvest,
      Domination, Kalguur,
      Essence, Legion,
      Ambush, Ritual,
      Torment, Ultimatum,
      Trarthan,
      Misc, Horned
    ]

    const response = await poeGet('Scarab')
    const priceRes: PriceResponse[] = response.data.lines
    const iconRes: IconResponse[] = response.data.items
    priceRes.forEach(data => {
      groups.forEach(group => {
        group.list.forEach(scarab => {
          if (scarab.id === data.id) {
            scarab.chaos = Number(Number(data.primaryValue || 0).toFixed(1))
            scarab.level = calcLevel(data.primaryValue)
          }
        })
      })
    })
    iconRes.forEach(data => {
      groups.forEach(group => {
        group.list.forEach(scarab => {
          if (scarab.id === data.detailsId) {
            scarab.icon = `https://web.poecdn.com${data.image}`
          }
        })
      })
    })
    return groups
  }
}

