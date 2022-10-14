function solve(...params) {
    for(let el of params) {
        let type = typeof(el);
        console.log(`${type}: ${el}`);

        if(!result.hasOwnProperty(type)){
            result[type] = 0;
        }
        result[type] = result[type] + 1;
    }

    let buff = "";
    for(let [key, value] of Object.entries(result)){
        buff += `${key} = ${value}\n`;
    }
    console.log(buff);
}