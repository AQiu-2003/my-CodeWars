export function rectangleRotation(a: number, b: number): number {
    const fn1 = createFunc(1, Math.sqrt((b * b) / 2))
    const fn2 = createFunc(-1, Math.sqrt((a * a) / 2))
    const fn3 = createFunc(1, -Math.sqrt((b * b) / 2))
    const fn4 = createFunc(-1, -Math.sqrt((a * a) / 2))
    
    const crossTop = getCrossPoint(fn1, fn2)
    const crossBottom = getCrossPoint(fn3, fn4)
    const crossLeft = getCrossPoint(fn1, fn4)
    const crossRight = getCrossPoint(fn2, fn3)

    const left = Math.ceil(crossLeft)
    const right = Math.floor(crossRight)

    let res = 0
    for (let x = left; x <= right; x++) {
        const top = x < crossTop ? fn1(x) : fn2(x)
        const bottom = x < crossBottom ? fn4(x) : fn3(x)
        res += Math.floor(top) - Math.ceil(bottom) + 1
    }
    return res
}

type mathFunc = {
    (x: number): number;
    k: number;
    b: number;
}
function createFunc(k: number, b: number): mathFunc {
    const fn:mathFunc = (x: number) => k * x + b
    fn.k = k
    fn.b = b
    return fn
}
function getCrossPoint(fn1: mathFunc, fn2: mathFunc): number {
    return (fn2.b - fn1.b) / (fn1.k - fn2.k)
}


console.log(rectangleRotation(6, 4));
// console.log(rectangleRotation(114514, 1919810))