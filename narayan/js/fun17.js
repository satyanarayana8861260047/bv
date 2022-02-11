function month(num) {
    switch (num) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        return num + ' 31 days';
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        return num + ' 30 days'
        break;
    case 2:
        return num + ' 28/29 days';
        break;
    default:
        return  num + ' invalid choice';
    }
}
console.log(month(7));