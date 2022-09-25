function addAndRemoveElements(arrOfCommands) {
    let result = [];
    let num = 1;
    arrOfCommands.forEach(command => {
        command === "add" ? result.push(num) : result.pop();
        num++;
    })
    return result.length === 0 ? "Empty" : result.join("\n");
}

console.log(addAndRemoveElements(['add', 
'add', 
'add', 
'add']
));
