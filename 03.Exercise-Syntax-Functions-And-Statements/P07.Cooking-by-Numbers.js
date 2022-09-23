function cookingByNumbers(inputNumber, ...commands) {
    commands.forEach(cmd => {
        inputNumber = manipulator(cmd, inputNumber)
    })
    function manipulator(cmd, num){
        switch(cmd){
            case "chop":
                num /= 2;
                console.log(num);
                break;
            case "dice":
                num = Math.sqrt(num);
                console.log(num);
                break; 
            case "spice":
                num += 1;
                console.log(num);
                break;
            case "bake":
                num *= 3;
                console.log(num);
                break;
            case "fillet":
                num *= 0.8;
                console.log(num);
                break;
        }
        return num;
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log("______________");
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');