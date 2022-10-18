let {assert} = require("chai");
let {isOddOrEven} = require("./P02.Even-Or-Odd");

describe("Test isOddOrEven with incorrect value", () =>{
    it("Results should be undefine with array arguments", ()=>{
        assert.equal(isOddOrEven([]), undefined)
    })

    it("Results should be undefine with empty object argument", ()=>{
        assert.equal(isOddOrEven({}), undefined)
    })

    it("Results should be undefine with object argument", ()=>{
        assert.equal(isOddOrEven({name: "Pesho"}), undefined)
    })

    it("Results should be undefine with boolean argument", ()=>{
        assert.equal(isOddOrEven(true), undefined)
    })

    it("Results should be undefine with number arguments", ()=>{
        assert.equal(isOddOrEven(1), undefined)
    })
})

describe("Test isOddOrEven with correct value", () =>{
    it("Result should be even with `Love`", ()=>{
        assert.equal(isOddOrEven("love"), "even")
    })

    it("Result should be even with `Todor`", ()=>{
        assert.equal(isOddOrEven("Todor"), "odd")
    })
})