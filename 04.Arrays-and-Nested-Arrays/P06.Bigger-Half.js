function solve(input) {
    input.sort((a, b) => a-b);

    return input.slice(input.length / 2);
}

result = solve([3, 19, 14, 7, 2, 19, 6]);
console.log(result);