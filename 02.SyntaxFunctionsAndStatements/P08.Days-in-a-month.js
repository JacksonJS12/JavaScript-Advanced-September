function daysInMonth(monthNum, year){
    let date = new Date(year, monthNum, 0).getDate();
    console.log(date);
}

daysInMonth(1, 2012);
daysInMonth(2, 2021);