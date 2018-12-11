function warningMaker(typeOfAccident) {

    return function where(adress) {
        return  'на ' + adress + " произошла " + typeOfAccident;
    }
}

var avariya = warningMaker('авария');
console.log( avariya('Успенская 20') );
