export enum CategoryType {
  KOREAN = '한식',
  WESTERN = '양식',
  CHINESE = '중식',
  JAPANESE = '일식',
  BAR = '주점',
  CAFE = '카페',
  HAIR = '헤어',
  FITNESS = '헬스',
  PC = 'PC',
  BILLIARDS = '당구',
  FLOWER = '꽃집',
  NAIL = '네일',
  ETC = '그외',
}

export const CATEGORY_EMOJI: Record<CategoryType, string> = {
  [CategoryType.KOREAN]: '🍚',
  [CategoryType.WESTERN]: '🍕',
  [CategoryType.CHINESE]: '🍲',
  [CategoryType.JAPANESE]: '🍣',
  [CategoryType.BAR]: '🍻',
  [CategoryType.CAFE]: '☕',
  [CategoryType.HAIR]: '💇',
  [CategoryType.FITNESS]: '💪',
  [CategoryType.PC]: '🖥️',
  [CategoryType.BILLIARDS]: '🎱',
  [CategoryType.FLOWER]: '💐',
  [CategoryType.NAIL]: '💅',
  [CategoryType.ETC]: '📦',
};

export const CATEGORY_LIST = Object.values(CategoryType);