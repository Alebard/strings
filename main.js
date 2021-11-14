function showVerticalMessage(obj) {
    for (var i = 0; i < obj.length; i++) {
        if (i < 10) {
            if (obj[i] === 'м') {
                console.log(obj[i].toUpperCase());
            } else {
                console.log(obj[i]);
            }
        }
    }
}

showVerticalMessage('марафонbohtrfn')