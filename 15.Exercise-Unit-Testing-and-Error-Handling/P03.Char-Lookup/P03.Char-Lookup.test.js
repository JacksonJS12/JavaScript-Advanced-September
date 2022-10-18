let {assert} = require("chai");
let {lookupChar} = require("./P03.Char-Lookup.js");

describe("Test lookupChar with incorrect type", () =>{
    it("result should be undefined with first parameter is incorrect", ()=>{
        assert.equal(lookupChar(5,5), undefined);
    });

    it("result should be undefined with second parameter is incorrect", ()=>{
        assert.equal(lookupChar("Pesho","Gosho"), undefined);
    });

    it("result should be undefined with second parameter is number", ()=>{
        assert.equal(lookupChar("Pesho", 5.1), undefined);
    });

    it("result should be undefined with first parameter is array", ()=>{
        assert.equal(lookupChar([], 0), undefined);
    });
})

describe("Test lookupChar with correct type but the value of the index is incorrect", () =>{
    it("result should be Incorrect index with bigger index", () =>{
        assert.equal(lookupChar("Todor", 100), "Incorrect index")
    });

    it("result should be Incorrect index with equal index", () =>{
        assert.equal(lookupChar("Todor", 5), "Incorrect index")
    });

    it("result should be Incorrect index with negative index", () =>{
        assert.equal(lookupChar("Todor", -5), "Incorrect index")
    });
})

describe("Test lookupChar with correct type and value", () =>{
    it("result should be T with zero index (Todor)", ()=>{
        assert.equal(lookupChar("Todor", 0), "T")
    });

    it("result should be r with last index (Todor)", ()=>{
        assert.equal(lookupChar("Todor", 4), "r")
    });
})