let  countDigits = (num) => {
     count = 0;
    while (num != 0) {
        num = parseInt(num / 10);
        count++;
    }
    return count;
}
let makeTwice = (num) => {
    let count = countDigits(num);
    switch (count){
        case 1:
            return num * 10 + num;
        case 2:
            return num * 100 + num;
    }
}
console.log(makeTwice(12));
console.log(makeTwice(6));