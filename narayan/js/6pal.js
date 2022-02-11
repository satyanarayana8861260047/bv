let num = 121;
let reverse = 0;
while(num!=0)
{
    reverse = (reverse*10) + (num%10);
    num = parseInt(num / 10);
}
if (num==reverse)
    console.log( num +' is palindrome');
else
    console.log( num +' is not palindrome');



