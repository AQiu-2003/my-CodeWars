export const towerBuilder = (nFloors: number): string[] => {
  // build here
  const arr: string[] = []
  for(let i = 1; i <= nFloors; i++) {
    arr.push(
        ' '.repeat(nFloors - i) +
        '*'.repeat(2 * i - 1) + 
        ' '.repeat(nFloors - i)
    )
  }
  return arr
}