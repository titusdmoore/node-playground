function toArrReversed(input) {
    let arrInput = input.toString().split("");

    for ( let i = 0; i < Math.floor(arrInput.length / 2) - 1; i++ ) {
        let hold = arrInput[(arrInput.length - 1) - i];
        console.log(hold, arrInput[i])
        arrInput[(arrInput.length - 1) - i] = arrInput[i];
        arrInput[i] = hold;
    }

    return arrInput;
}

console.log(toArrReversed(1234567890));
