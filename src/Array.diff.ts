export function arrayDiff(a: number[], b: number[]): number[] {
    for (let i = 0; i < a.length; i++) {
      if (b.indexOf(a[i]) !== -1) {
        a.splice(i, 1)
        i--
      }
    }
    return a
  }