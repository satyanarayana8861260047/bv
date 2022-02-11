let prime = (num) => {
    for(i=2; i<=num; i++) {
        if(num%i==0)
            break;
    }
    if(num==i)  
       return (num +" it is prime");
    else
       return (num +" it is not prime");
    }
    console.log(prime(5));
    console.log(prime(8));
    console.log(prime(11));
