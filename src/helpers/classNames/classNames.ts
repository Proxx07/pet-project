
type Mods = Record<string, string | boolean>
export function classNames (mainClass: string, mods: Mods, additional: string[]): string {
  const result = [
    mainClass,
    ...additional,
    ...Object.entries(mods)
      .filter(([classname, value]) => Boolean(value))
      .map(([classname]) => classname)
  ]

  return result.join(' ')
}