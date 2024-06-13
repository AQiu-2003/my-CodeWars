export const listSquared = (m: number, n: number): number[][] => {
    const res: number[][] = []

    for(let i = m; i <= n; i++) {
        const divisors: number[] = []
        // 1. find all divisors
        for(let j = 1; j <= Math.floor(i/2); j++) {
            if(i % j === 0) {
                divisors.push(j)
            }
        }
        divisors.push(i)
        // console.log('dovosprs', divisors);
        
        // 2. sum and validate if is a square
        let sum = 0
        const squared = divisors.forEach(e => {
            sum += Math.pow(e, 2)
        })
        // console.log('sum', sum);
        
        if(Math.sqrt(sum) % 1 === 0) {
            res.push([i, sum])
        }
    }

    return res
};
