export const josephus = <T>(items: T[], k: number): T[] => {
    const res = Array<T>()
    const iterator = josephusIterator(items, k)
    return [...iterator]
    // or you can use 'for(const i of iterator)'
};

function* josephusIterator<T>(items: T[], k: number) {
    let copy = [...items]
    let pointer = 0

    while(copy.length > 0) {
        pointer = (pointer + k - 1) % copy.length
        yield copy[pointer]
        copy.splice(pointer, 1)
    }
    return
}

console.log(josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4));
