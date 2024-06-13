// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { countBits } from "../src/Bit Counting";

// TODO Add your tests here
describe("example", function () {
    it("test", function () {
        // assert.equal(countBits(0), 0);
        // assert.equal(countBits(4), 1);
        // assert.equal(countBits(7), 3);
        // assert.equal(countBits(9), 2);
        // assert.equal(countBits(10), 2);
        // assert.equal(countBits(2039834896647417), 26);
        assert.equal(countBits(4527150829965247), 26);
    });
});
