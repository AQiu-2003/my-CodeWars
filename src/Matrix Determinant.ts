export function determinant(m: number[][]) {
    if(m.length === 1) return m[0][0]
    if(m.length === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0]
    let res = 0
    for(let i = 0; i < m.length; i++) {
        const copy = JSON.parse(JSON.stringify(m)) as number[][]
        copy.shift()
        copy.forEach(e => e.splice(i, 1))
        let temp = m[0][i] * determinant(copy)
        temp = i % 2 ? -temp : temp
        res += temp
    }
    return res
}

console.log(
    determinant([
        [2, 5, 3],
        [1, -2, -1],
        [1, 3, 4],
    ])
);
