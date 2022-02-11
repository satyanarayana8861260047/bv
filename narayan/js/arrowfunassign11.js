let largestNum = (num1,num2,num3) => {
    if(num1>num2 && num1>num3)
        return num1 + ' is greater';
    else if(num2>num1 && num2>num3)
        return num2 + 'is  greater';
    else
        return num3 + ' is greater';
    }
    console.log(largestNum(10,20,30));