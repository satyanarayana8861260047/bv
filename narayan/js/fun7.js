function prime(num){
for(i=2; i<=num; i++) {
    if(num%i==0)
        break;
}
if(num==i)  
   return (num +" it is prime");
else
   return (num +" it is not prime");
}
let result = prime(5);
console.log(result);