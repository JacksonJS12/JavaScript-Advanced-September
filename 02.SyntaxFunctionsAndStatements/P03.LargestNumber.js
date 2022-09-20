function largestNumber(numOne, numTwo, numThree){
    let largestNum = 0;
    if(numOne > numTwo){
        if(numOne > numThree){
            largestNum = numOne;
        }
        else{
            largestNum = numThree
        }
    }
    else{
        if(numTwo > numThree){
            largestNum = numOne;
        }
        else{
            largestNum = numThree
        }
    }
    console.log('The largest number is ' + largestNum + '.');
}

largestNumber(-3, -5, -22.5);