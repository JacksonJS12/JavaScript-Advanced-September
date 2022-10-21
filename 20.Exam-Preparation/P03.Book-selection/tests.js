let {assert} = require("chai");
let bookSelection = require("./solution");

describe("Tests for bookSelection", ()=> {
    describe("Tests isGenreSuitabl", ()=> {
        function concatenateStr(genre, age){
            return `Books with ${genre} genre are not suitable for kids at ${age} age`;
        }

        it("Wrong genre", () =>{
            let expectedText = concatenateStr("Thriller", 12);
            assert.equal(bookSelection.isGenreSuitable("Thriller", 12), expectedText);

            expectedText = concatenateStr("Horror", 12);
            assert.equal(bookSelection.isGenreSuitable("Horror", 12), expectedText);
        });

        it("correct genre", () =>{
            let expectedText = "Those books are suitable";
            assert.equal(bookSelection.isGenreSuitable("Thriller", 13), expectedText);
            assert.equal(bookSelection.isGenreSuitable("Thriller", 25), expectedText);
            assert.equal(bookSelection.isGenreSuitable("Horror", 13), expectedText);
            assert.equal(bookSelection.isGenreSuitable("Horror", 25), expectedText);
        });

    });
    describe("Test isItAffordable", () =>{
        it("don't have enough money", () =>{
            assert.equal(bookSelection.isItAffordable(11, 10), "You don't have enough money");
            assert.equal(bookSelection.isItAffordable(51, 50), "You don't have enough money");
        });

        it("Book bought", () =>{
            assert.equal(bookSelection.isItAffordable(10, 11),`Book bought. You have 1$ left`)
            assert.equal(bookSelection.isItAffordable(10, 10),`Book bought. You have 0$ left`)
            assert.equal(bookSelection.isItAffordable(10, 50),`Book bought. You have 40$ left`)
        });

        it("Wrong data type", () =>{
            assert.throw(() => bookSelection.isItAffordable("pesho", 10), "Invalid input");
            assert.throw(() => bookSelection.isItAffordable("pesho", "gosho"), "Invalid input");
            assert.throw(() => bookSelection.isItAffordable("10", "10"), "Invalid input");
            assert.throw(() => bookSelection.isItAffordable(10, "10"), "Invalid input");
        });
    });

    describe("Test suitableTitles", () =>{
        it("Wrong data type", () =>{
            assert.throw(() => bookSelection.suitableTitles("gosho", "pesho"), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles(10, "pesho"), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles({}, "pesho"), "Invalid input");

            assert.throw(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 10), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], {}), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], []), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles({}, {}), "Invalid input");
            assert.throw(() => bookSelection.suitableTitles(10, 10), "Invalid input");
        });

        it("Correct data", () =>{
            let input = [
                { title: "The Da Vinci Code", genre: "Thriller"},
                { title: "The Da Vinci Code1", genre: "Thriller"},
                { title: "The Da Vinci Code2", genre: "Horror"},
            ];

            let result = ["The Da Vinci Code", "The Da Vinci Code1"];
            assert.equal(bookSelection.suitableTitles(input, "Thriller").join(" "), result.join(" "));
            result = ["The Da Vinci Code2"]
            assert.equal(bookSelection.suitableTitles(input, "Horror").join(" "), result.join(" "));
            result = [];
            assert.equal(bookSelection.suitableTitles(input, "Comedy").join(" "), result.join(" "))
        })
    });
})