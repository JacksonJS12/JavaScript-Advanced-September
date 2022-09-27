function createAnObject(name, population, treasury) {
    return {
        name, population, treasury
    };
}

let city = createAnObject('Tortuga', 7000 ,15000);
console.log(city);