function isEven(num) {
    if (num % 2 == 0)
        return num + ' is even';
    else
        return num + ' is odd';
}
let result = isEven(20);
console.log(result);