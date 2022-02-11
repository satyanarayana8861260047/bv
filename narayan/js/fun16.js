function ascending(num1,num2,num3,num4,num5) {
    let i; temp;
    for (i=0; i<5; i++) {
    for (j=i+1; j<5; j++)
        if(i>j)
        temp=i;
        i=j;
        j=temp;
}
console.log(ascending(10,30,20,80,50)); }