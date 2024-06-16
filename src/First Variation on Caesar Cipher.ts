export const movingShift = (s: string, shift: number) => {
    let offset = toRange(26, shift);
    const variation = [...s]
        .map((e) => {
            if (e.match(/[a-zA-Z]/g)) {
                const base = e.match(/[a-z]/g)
                    ? "a".charCodeAt(0)
                    : "A".charCodeAt(0);
                const temp = ((e.charCodeAt(0) - base + offset) % 26) + base;
                e = String.fromCharCode(temp);
            }
            offset += 1;
            return e;
        })
        .join("");

    const split = Math.ceil(s.length / 5);
    let res: string[] = Array(5).fill("");
    for (let i = 0, part = 0; i < s.length; i += split, part++) {
        res[part] = variation.slice(i, i + split);
    }
    return res;
};

export const demovingShift = (arr: string[], shift: number) => {
    let offset = toRange(26, shift);
    return [...arr.join("")].map((e) => {
        if (e.match(/[a-zA-Z]/g)) {
            const base = e.match(/[a-z]/g)
                ? "a".charCodeAt(0)
                : "A".charCodeAt(0);
            const temp = toRange(26, e.charCodeAt(0) - base - offset) + base;
            e = String.fromCharCode(temp);
        }
        offset += 1;
        return e;
    }).join('')
};

function toRange(base: number, num: number): number {
    if (num < 0) num += Math.ceil(-num / base) * base;
    return num % 26;
}

const u = "I should have known that you would have a perfect answer for me!!!";

const v = [
    "J vltasl rlhr ",
    "zdfog odxr ypw",
    " atasl rlhr p ",
    "gwkzzyq zntyhv",
    " lvz wp!!!",
].join("");

console.log(movingShift(u, 1));
console.log(demovingShift(movingShift(u, 1), 1));


// const res = [...u].map((e, index) => {
//     let offest = v[index].charCodeAt(0) - e.charCodeAt(0)
//     if(offest < 0) offest += 26
//     return {
//         offest,
//         u: e,
//         v: v[index]
//     }
// })
// console.log(res);

// // 19
// // 19 / 5 = 3 ... 4
// // 19 / 4 = 4 ... 3
