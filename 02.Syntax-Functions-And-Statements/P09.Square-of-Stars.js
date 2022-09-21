function starsSquare(size) {
    if(typeof size === 'undefined') {
        size = 5; // default size
    }
    let square = '';
    for(let r = 0; r < size; r++) {
        for(let c = 0; c < size; c++) {
            if(c === size + 1) {
                square += '*';
            }
            else {
                square += '* ';
            }
        }
        square += '\r\n';
    }
    console.log(square);
}

starsSquare(7);
starsSquare(3);
starsSquare();