export function rgb(r: number, g: number, b: number): string {
    return (
        convertFunc(r) + convertFunc(g) + convertFunc(b)
    );
}

function convertFunc(n: number): string {
    n = Math.max(n, 0)
    n = Math.min(255, n)
    let res = n.toString(16).toUpperCase();
    if(res.length < 2) res = '0' + res
    return res
}
