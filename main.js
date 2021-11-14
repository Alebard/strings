function showVerticalMessage(str) {
    str = str.slice(0, 10);
    for (let symbol of str){
        if(symbol === 'м'){
            console.log(symbol.toUpperCase());
            continue
        }
        console.log(symbol);
    }
}

showVerticalMessage('марафонbohtrfnsadfasf')