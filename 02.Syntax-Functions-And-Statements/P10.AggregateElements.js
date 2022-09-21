function arraysOperations(array){
    let sum = array.reduce((a, b) => a + b, 0);

    let sum2 = 0;
    for(let i = 0; i < array.length; i++) {
        sum2 += (1 / array[i]);
    }
    
    let str = '';
    for(let i = 0; i < array.length; i++) {
       str += array[i];
    }
    
    console.log(sum);
    console.log(sum2);
    console.log(str);
}

arraysOperations([1, 2, 3]);
arraysOperations([2, 4, 8, 16]);