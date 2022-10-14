function getFibonator(){
    let firstNum = 0;
    let secNum = 1;

    return function(){
        let sum = firstNum + secNum;
        firstNum = secNum;
        secNum = sum;
        return firstNum
    }
}