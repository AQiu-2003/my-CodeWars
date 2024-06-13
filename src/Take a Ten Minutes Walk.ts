export function isValidWalk(walk: string[]) {
    let ns = 0
    let we = 0

    walk.forEach((value, index, array) => {
        switch (value) {
            case 'n':
                ns++
                break
            case 's':
                ns--
                break
            case 'e':
                we--
                break
            case 'w':
                we++
                break
        }
    })

    return ns === 0 && we === 0 && walk.length === 10
}