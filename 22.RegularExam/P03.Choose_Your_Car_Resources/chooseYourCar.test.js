let {assert} = require("chai");
let chooseYourCar = require("./chooseYourCar");

describe("Tests chooseYourCar", () => {
    describe("Tests ChoosingType", () =>{
        it("test year set is less than 1900", () =>{
            let exp = "Invalid Year!";
            //type, color, year
            assert.throws(() => chooseYourCar.choosingType("Mazda", "blue", 1800), exp);
        });

        it("test year set is more than 2022", () =>{
            let exp = "Invalid Year!";
            //type, color, year
            assert.throws(() => chooseYourCar.choosingType("Mazda", "blue", 2023), exp);
        });

        it("test is type different from Sedan", ()=>{
            let exp = "This type of car is not what you are looking for.";
            //type, color, year
            assert.throw(() => chooseYourCar.choosingType("Mazda", "blue", 2000), exp);
        })

        it("test is the Sedan 2009 gonna be picked ", () =>{
            let exp = "This Sedan is too old for you, especially with that green color."
            ;
            //type, color, year
            assert.equal(chooseYourCar.choosingType("Sedan", "green", 2009), exp);
        });

        it("test is the Sedan 2010 gonna be picked", () =>{
            let exp = "This green Sedan meets the requirements, that you have."
            ;
            //type, color, year
            assert.equal(chooseYourCar.choosingType("Sedan", "green", 2010), exp);
        });
    });
    describe("Tests brandName", () =>{
       it("test brands is array", () =>{
            //!Array.isArray(brands) || 
            //!Number.isInteger(brandIndex) 
            //|| brandIndex < 0 ||
            // brandIndex >= brands.length
           //brands, brandIndex

           let exp = "Invalid Information!";
           assert.throws(() => chooseYourCar.brandName("BMW", 1), exp);
       });

       it("test brandIndex is integer", () =>{
        //!Array.isArray(brands) || 
        //!Number.isInteger(brandIndex) 
        //|| brandIndex < 0 ||
        // brandIndex >= brands.length
       //brands, brandIndex

       let exp = "Invalid Information!";
       assert.throws(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], "1"), exp);
        }); 
        it("test brandIndex is less than 0", () =>{
            //!Array.isArray(brands) || 
            //!Number.isInteger(brandIndex) 
            //|| brandIndex < 0 ||
            // brandIndex >= brands.length
           //brands, brandIndex
    
            let exp = "Invalid Information!";
            assert.throws(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1), exp);
        });

        it("test brandIndex is greater or equal to brands length", () =>{
            //!Array.isArray(brands) || 
            //!Number.isInteger(brandIndex) 
            //|| brandIndex < 0 ||
            // brandIndex >= brands.length
           //brands, brandIndex
    
            let exp = "Invalid Information!";
            assert.throws(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 4), exp);
            assert.throws(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3), exp);
        });


        it("test remove an element from the array that is located on the index specified as a parameter", () =>{
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot", "Mazda"], 2), ["BMW, Toyota, Mazda"])
        })
    });
    describe("Tests carFuelConsumption", () =>{
       it("test is the input integer", () =>{
            let exp = "Invalid Information!";
            assert.throws(()=> chooseYourCar.carFuelConsumption("10", "2"), exp);
       });

       it("test is the input negative numbers", () =>{
        let exp = "Invalid Information!";
        assert.throws(()=> chooseYourCar.carFuelConsumption(-10, -2), exp);
        });

        //((consumptedFuelInLiters / distanceInKilometers)* 100).toFixed(2)
        it("test is the car efficient", () =>{
            let expOutput = `The car is efficient enough, it burns 6.25 liters/100 km.`
            assert.equal(chooseYourCar.carFuelConsumption(80, 5), expOutput);
        });

        it("test is the car not efficient", () =>{
            let expOutput = "The car burns too much fuel - 11.25 liters!"
            assert.equal(chooseYourCar.carFuelConsumption(80, 9), expOutput);
        });
    });
     
});
