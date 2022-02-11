function pali(num) {

let originalNum = num;
let reverse = 0;
while(num!=0)
{
    reverse = (reverse*10) + (num%10);
    num = parseInt(num / 10);
}
if (originalNum==reverse)
    return originalNum + ' is palindrome';
else
    return originalNum + ' is not palindrome';
}

let result = pali(121);
console.log(result);