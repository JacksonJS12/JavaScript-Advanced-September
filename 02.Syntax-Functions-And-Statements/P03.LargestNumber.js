function largestNumber(numOne, numTwo, numThree){
    let largestNum = 0;
    
    if(numOne > numTwo && numOne > numThree){
        largestNum = numOne
    }
    else if(numTwo > numOne && numTwo > numThree){
        largestNum = numTwo;
    }
    else if(numThree > numOne && numThree > numTwo){
        largestNum = numThree;
    }

    console.log(`The largest number is ${largestNum}.`);
}

largestNumber(-3, -5, -22.5);