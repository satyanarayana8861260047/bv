let n = 1268;
sum = 0;
while (n > 10 ) {
    r = n % 10 ;
    sum = sum + r ;
    n = parseInt  (n / 10) ;
 }
 console.log(sum);
