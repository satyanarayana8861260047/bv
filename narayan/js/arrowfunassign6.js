let pali = (num) => {
     originalNum = num;
     reverse = 0;
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

console.log(pali(121));
console.log(pali(122));
console.log(pali(141));