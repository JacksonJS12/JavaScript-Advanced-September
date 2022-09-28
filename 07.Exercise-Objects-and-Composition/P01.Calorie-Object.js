function calorieFoods(data) {
    let foods = {};
    for(let i = 0; i < data.length; i+=2) {
        foods[data[i]] = Number(data[i+1]);
    }
    console.log(foods);
}
calorieFoods(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);