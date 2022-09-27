function solve(input) {
    let townData = input
    .map(element => {
        let data = element.split(' <-> ');

        return{
            name: data[0],
            population: Number(data[1])
        };
    });

    const registry = {};

    for (let town of townData) {
        if(registry[town.name] != undefined) {
            town.population += registry[town.name];
        }
            registry[town.name] = town.population;
        
    }

    for(let town in registry) {
        console.log(`${town} : ${registry[town]}`);
    }
}

solve([
'Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);
console.log("---------------------")

solve([
'Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)