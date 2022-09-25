function sortAnArrayBy2Criteria(array) {
    let sortArray = array.sort((a,b) =>{
        if(a.length !== b.length){
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    })
    console.log(sortArray.join("\n"));
}

sortAnArrayBy2Criteria(['alpha', 
'beta', 
'gamma']
);