/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

export function countBits(n: number): number {
    let count = 0
    while(n !== 0) {
        console.log(count, n&1, n.toString(2));
        
        count += n & 1
        n = Math.floor(n/2)
    }
    return count
}