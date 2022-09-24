function solve(input) {
    return input 
        .filter((m, i) => i % 2 !== 0)
        .map(n => n * 2)
        .reverse()
        .join();
}

let result = solve ([10, 15, 20, 25]);
console.log(result);