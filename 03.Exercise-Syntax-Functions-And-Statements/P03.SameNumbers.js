function sameNumbers(num) {
    let numToString = String(num);
    
    let firstNum = numToString[0];
    let isSame = true;
    let sum = 0;
    for(let i = 0; i < numToString.length; i++) {
        if(firstNum !== numToString[i]) {
            isSame = false;
        }
        sum += Number(numToString[i]);
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);