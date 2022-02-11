function add(n1,n2,n3) {
    if (n1 + n2 == n3)
        return true;
    else if (n2 + n1 == n3)
        return true;
    else
        return false;
}
console.log(add(1,2,3));
console.log(add(4,5,6));