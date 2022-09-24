function solve(input) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    let firstIndex = 0;
    let secondIndex = input[0].length - 1;
    input.forEach(array => {
        mainDiagonal += array[firstIndex++];
        secondaryDiagonal += array[secondIndex--];
    });
    console.log(mainDiagonal + '', secondaryDiagonal);
}

let matrix = 
            [[20, 40],
            [10, 60]];

solve(matrix);

