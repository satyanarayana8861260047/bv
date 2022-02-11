const myFunc = props =>{
    const {x,y} = props;
    console.log(x);
    console.log(y);
};

function anotherFunc(props) {
    const {x,y} = props;
    console.log(x);
    console.log(y);
}

const obj = {x:123, y:'yo yo'};
myFunc(obj);

anotherFunc(obj);