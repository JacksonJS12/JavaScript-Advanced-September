function solve(array) {
    let res = [];
    let biggestNum = array.shift();
    res.push(biggestNum);

    for (el of array){
        if(el >= biggestNum){
            res.push(el);
            biggestNum = el;
        }
    }
    return res;
}

let output = solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
);

console.log(output);