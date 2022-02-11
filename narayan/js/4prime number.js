let from = 1;
let to = 100;

for(i=from; i<=to; i++) {
    for(j=2; j<=i; j++){
        if(i%j==0)
        break;
    }   
    if(i==j) {
        console.log(j);
    }


}
