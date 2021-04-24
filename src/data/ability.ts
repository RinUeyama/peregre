import { IImage } from "~/interfaces";

export interface IAbility {
  name: string
  icon: IImage
  text: string
  level?: number
}

// レベルが高くても有名さとは比例しない
export const ABILITY_LIST: IAbility[] = [
  /*
  {
    name: '警句',
    icon: {
      src: '',
      alt: ''
    },
    text: '「かねて種に水はあり、朽ちて湖へ還る。芽生えし者よ、空を恐れたまえ。」'
  },
  */
  {
    name: '黒魔術',
    icon: {
      src: '',
      alt: ''
    },
    text: '黒魔術に関する知識および黒魔術書の解読'
  },
  {
    name: '登攀',
    icon: {
      src: '',
      alt: ''
    },
    text: '登攀やよじ登り、足場の不安定な場所での大きな荷物を持っての歩行'
  },
  {
    name: '隠密',
    icon: {
      src: '',
      alt: ''
    },
    text: '隠すことではなく隠れること'
  },
  {
    name: '解錠',
    icon: {
      src: '',
      alt: ''
    },
    text: 'ピッキング技能'
  },
  {
    name: 'シンボライズ',
    icon: {
      src: '',
      alt: ''
    },
    text: 'シンボルの記憶およびシンボルの意味に対する推察'
  },
  {
    name: '古代知識',
    icon: {
      src: '',
      alt: ''
    },
    text: '古代文字の解読や象徴的な古代遺跡の判別'
  },
  {
    name: '追跡',
    icon: {
      src: '',
      alt: ''
    },
    text: 'いつ頃何が起こったかの判別（風雨や雑踏により痕跡は消えやすい）'
  },
  {
    name: 'ナビゲート',
    icon: {
      src: '',
      alt: '',
    },
    text: '迷わずに目的地までたどり着いたり元の場所に戻るための技能'
  },
  {
    name: '星詠み',
    icon: {
      src: '',
      alt: ''
    },
    text: '夜空から方角を把握したり吉兆を占う技能'
  },
  {
    name: '空詠み',
    icon: {
      src: '',
      alt: ''
    },
    text: '風や空模様から天候を把握する技能'
  },
  {
    name: '弱者煽動',
    icon: {
      src: '',
      alt: ''
    },
    text: '社会的弱者の怒りを掻き立てる技能'
  },
  {
    name: '魔女への鉄槌',
    icon: {
      src: '',
      alt: ''
    },
    text: '社会的弱者への攻撃を煽る技能'
  },
  {
    name: '袖下上手',
    icon: {
      src: '',
      alt: ''
    },
    text: '賄賂に必要な金額を把握する技能'
  },
  {
    name: 'プロファイリング',
    icon: {
      src: '',
      alt: ''
    },
    text: '人物の一見した特徴から職業や趣味などを大雑把に把握する技能'
  },
  {
    name: '調教',
    icon: {
      src: '',
      alt: ''
    },
    text: '奴隷を従順にさせる技能'
  },
  {
    name: '拷問',
    icon: {
      src: '',
      alt: ''
    },
    text: '拷問時、対象を誤って殺害しにくくなり、情報を吐き出させるまでの時間を早める技能'
  },
  {
    name: '香水選び',
    icon: {
      src: '',
      alt: ''
    },
    text: '匂いの記憶や対象に適した香水を選ぶ技能'
  },
  {
    name: '演技',
    icon: {
      src: '',
      alt: ''
    },
    text: '嘘を飾ることにも用いてもよいが、成功率が低くなるかもしれない'
  },
  {
    name: '洗脳',
    icon: {
      src: '',
      alt: ''
    },
    text: '洗脳に関する知識、適切な設備と時間を用意すれば対象を洗脳する技能。'
  },
  {
    name: '自己解離',
    icon: {
      src: '',
      alt: ''
    },
    text: '精神的・肉体的苦痛から自身の人格や感覚を逃す技能（解離中の行動は進行役と要相談）'
  },
  {
    name: '器用',
    icon: {
      src: '',
      alt: ''
    },
    text: '指先で行う動作の精緻さを示す技能'
  },
  {
    name: '野営',
    icon: {
      src: '',
      alt: ''
    },
    text: '野営に適した場所の選定や食せる動植物の判別'
  },
  {
    name: '交渉',
    icon: {
      src: '',
      alt: ''
    },
    text: '互いの譲歩する地点を見つけ出す技能'
  },
  {
    name: '執筆',
    icon: {
      src: '',
      alt: ''
    },
    text: '物事を論理的に書き上げる技能'
  },
  {
    name: '演説',
    icon: {
      src: '',
      alt: ''
    },
    text: '対象は1人でも集団でもよいが、人に何かを成せると思わせる技能、あるいはそれ自体への演説への耐性'
  },
  {
    name: '諦観',
    icon: {
      src: '',
      alt: ''
    },
    text: '希望や絶望への耐性'
  },
  {
    name: '酒豪',
    icon: {
      src: '',
      alt: ''
    },
    text: '酒の強さを表す技能'
  },
  {
    name: '吟遊',
    icon: {
      src: '',
      alt: ''
    },
    text: '脚色して詠む技能'
  },
  {
    name: '演奏',
    icon: {
      src: '',
      alt: ''
    },
    text: '任意の楽器を演奏する技能'
  },
  {
    name: '占星術',
    icon: {
      src: '',
      alt: ''
    },
    text: '星占いの技能'
  },
  {
    name: 'イカサマ',
    icon: {
      src: '',
      alt: ''
    },
    text: '主にギャンブルでイカサマしたりイカサマを見抜く技能'
  },
  {
    name: '誘惑',
    icon: {
      src: '',
      alt: ''
    },
    text: '主に異性を誘惑したり誘惑に耐える技能'
  },
  {
    name: '壮健',
    icon: {
      src: '',
      alt: ''
    },
    text: '疲弊状態／病気になりにくい性質'
  },
  {
    name: 'ナイフ投げ',
    icon: {
      src: '',
      alt: ''
    },
    text: 'ある程度近ければ、ナイフを狙った箇所に命中させる能力'
  },
  {
    name: '応急手当',
    icon: {
      src: '',
      alt: ''
    },
    text: '傷を適切に食い止める技能（プレイヤーキャラクターに対しては用いなくともよい）'
  },
  {
    name: '哲学',
    icon: {
      src: '',
      alt: ''
    },
    text: '宇宙を紐とく姿勢や論理的思考に関する技能（同レベルの神学も有する）'
  },
  {
    name: '神学',
    icon: {
      src: '',
      alt: ''
    },
    text: '「神は空を廻し、我ら宇を廻る」（善を考え為すことで神の地へと至り、御子として再び地に宿る。今世の身は善行の果てであり始まりであるから、善いことを考え為し続けなければならない）'
  },
  {
    name: '書類偽造',
    icon: {
      src: '',
      alt: ''
    },
    text: '材料と時間があれば書類を偽造できたり、それを見破れる技能'
  },
  {
    name: '話術',
    icon: {
      src: '',
      alt: ''
    },
    text: '話によって場を持たせる技能'
  },
  {
    name: '',
    icon: {
      src: '',
      alt: ''
    },
    text: ''
  },
  {
    name: '',
    icon: {
      src: '',
      alt: ''
    },
    text: ''
  },
  {
    name: '',
    icon: {
      src: '',
      alt: ''
    },
    text: ''
  },
  {
    name: '',
    icon: {
      src: '',
      alt: ''
    },
    text: ''
  },
  {
    name: '',
    icon: {
      src: '',
      alt: ''
    },
    text: ''
  },
  {
    name: '',
    icon: {
      src: '',
      alt: ''
    },
    text: ''
  },
]