const myFunc = ({x,y}) =>{
    console.log(x);
    console.log(y);
};
const obj = {x:123, y:'yo yo'};
myFunc(obj);


function anotherFunc({x,y}) {
    console.log(x);
    console.log(y);
}
anotherFunc(obj);