function stringLength(firstString, secondString, thirdString){
    let totalLenght = firstString.length + secondString.length + thirdString.length;

    let avrSum = Math.floor(totalLenght / 3);

    console.log(totalLenght);
    console.log(avrSum);
}

stringLength('chocolate', 'ice cream', 'cake');