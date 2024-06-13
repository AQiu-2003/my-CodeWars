export function persistence(num: number): number {
    if(num.toString().length === 1)
        return num
    else {
        const digits = num.toString().split('').map(e => parseInt(e))
        return persistence(digits.reduce((accumulator, currentValue) => accumulator * currentValue));
    }
        
}
