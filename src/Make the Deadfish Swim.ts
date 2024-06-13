/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [8, 64]
*/

/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
    const actions = data.split('')
    let value = 0
    const res: number[] = []

    for(let action of actions) {
        switch(action) {
            case 'i': value++; break
            case 'd': value--; break
            case 's': value *= value; break
            case 'o': res.push(value); break
        }        
    }

    return res
}