const snail = function(array) {
    if(array.length === 0) return []
    let n = array[0].length
    if(n === 0) return []

    array.unshift(Array(n).fill(undefined))
    array.push(Array(n).fill(undefined))
    array.forEach(v => {
        v.unshift(undefined)
        v.push(undefined)
    })

    let step = {x: 1, y: 1}
    let direction = {x: 0, y: 1}
    let res = []
    res.push(array[step.x][step.y])
    while(
        array[step.x + 1][step.y] !== undefined ||
        array[step.x - 1][step.y] !== undefined ||
        array[step.x][step.y + 1] !== undefined ||
        array[step.x][step.y - 1] !== undefined
    ) {
        // console.log(step.x, step.y)
        if(array[step.x + direction.x][step.y + direction.y] === undefined) {
            getNextDirection(direction)
        }
        array[step.x][step.y] = undefined
        step.x += direction.x
        step.y += direction.y
        res.push(array[step.x][step.y])
        // console.log(step.x, step.y)

    }
    return res
}

function getNextDirection(direction) {
    if(direction.x === 0 && direction.y === 1) {
        direction.x = 1
        direction.y = 0
    } else if(direction.x === 1 && direction.y === 0) {
        direction.x = 0
        direction.y = -1
    } else if(direction.x === 0 && direction.y === -1) {
        direction.x = -1
        direction.y = 0
    } else if(direction.x === -1 && direction.y === 0) {
        direction.x = 0
        direction.y = 1
    }
}

import { assert } from 'chai'

describe("Tests", () => {
    it("test", () => {
        assert.deepEqual(snail([[]]), []);
        assert.deepEqual(snail([[1]]), [1]);
        assert.deepEqual(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
        assert.deepEqual(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
        assert.deepEqual(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
    });
});
