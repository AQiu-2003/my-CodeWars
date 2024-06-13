export function dirReduc(arr: string[]): string[] {
    for(let i = 0; i < arr.length - 1; i++) {
        if(isOpposite(arr[i], arr[i+1])) {
            arr.splice(i, 2)
            i -= i < 1 ? 1 : 2
        }
    }
    return arr
}

function isOpposite(a: string, b: string): boolean {
    return a === 'NORTH' && b === 'SOUTH'
        || a === 'SOUTH' && b === 'NORTH'
        || a === 'EAST'  && b === 'WEST'
        || a === 'WEST'  && b === 'EAST'
}