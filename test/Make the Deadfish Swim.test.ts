// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { parse } from "../src/Make the Deadfish Swim";

// TODO Add your tests here
describe("example", function () {
    it("test", function () {
        assert.deepEqual(parse("iiisdoso"), [8, 64]);
        assert.deepEqual(parse("iiisxxxdoso"), [8, 64]);
    });
});
