let sameLastDigit = (a,b) => {
    let digit1 = a % 10;
    let digit2 = b % 10;

    if(digit1 == digit2)
        return true;
    else
        return false;
}
console.log(sameLastDigit(1234,1234));
console.log(sameLastDigit(1234,1235));
console.log(sameLastDigit(1234,124));