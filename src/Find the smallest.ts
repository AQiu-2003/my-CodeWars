export function smallest(n: number): number[] {
    const num = [...n.toString()].map((e) => parseInt(e));
    let res = [n, 0, 0];
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (i === j) continue;
            move(num, i, j);
            if (parseInt(num.join("")) < res[0]) {
                res = [parseInt(num.join("")), i, j];
            }
            console.log(i, j, res);
            move(num, j, i);
        }
    }
    return res;
}

function move(arr: any[], from: any, to: any) {
    const temp = arr[from];
    arr.splice(from, 1);
    arr.splice(to, 0, temp);
}

console.log(smallest(261235));
