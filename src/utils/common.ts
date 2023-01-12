// 获取css有效值
export function getCssValue(value: StringNumber): string {
  value = value.toString();
  return /^\d+$/.test(value) ? `${parseInt(value) / 75}rem` : value
}