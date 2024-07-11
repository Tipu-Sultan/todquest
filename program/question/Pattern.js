function printPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let line = '';
        for (let j = 0; j < rows; j++) {
            if (i === 0 || j === 0 || i + j === rows - 1) {
                line += '* ';
            } else {
                line += '  ';
            }
        }
        console.log(line);
    }
}

printPattern(6);
