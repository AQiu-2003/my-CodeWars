export function scramble(str1: string, str2: string): boolean {
  const count = Array(26).fill(0)
  const offset = 'a'.charCodeAt(0)
  for(let i = 0; i < str1.length; i++) {
    count[str1.charCodeAt(i) - offset] += 1
  }
  // console.log(count.toString())
  for(let i = 0; i < str2.length; i++) {
    const temp = str2.charCodeAt(i) - offset
    count[temp] -= 1
    if(count[temp] < 0) return false
  }
  // console.log(count.toString())
  return true;
}

console.log(scramble('rkqodlw', 'world'))