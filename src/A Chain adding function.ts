// https://cloud.tencent.com/developer/article/1768047
export default function add(x: number): any {
  // Curry away, curry away, curry away me hearties!
  const fn = (n: number): number => {
    return add(x + n)
  }
  fn.toString = () => x
  return fn
}

console.log(add(1) == 2)
console.log(add(1)(2))