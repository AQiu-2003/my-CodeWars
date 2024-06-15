import { listSquared } from "../src/Integers: Recreation One";
import { assert, config } from "chai";
config.truncateThreshold = 0;

function testing(m: number, n: number, expected: number[][]) {
    assert.deepEqual(listSquared(m, n), expected);
}

describe("Fixed Tests", function () {
    it("listSquared", function () {
        testing(1, 250, [
            [1, 1],
            [42, 2500],
            [246, 84100],
        ]);
        testing(42, 250, [
            [42, 2500],
            [246, 84100],
        ]);
        testing(250, 500, [[287, 84100]]);
        testing(300, 600, []);
    });
});
