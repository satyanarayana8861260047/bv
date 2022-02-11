var emp = {
    name : "jack",
    salary : 606060,
    city:"Benglore",
    get empcity(){
        return this.city;
    },
    get empName(){
        return this.name;
    }
};

console.log(emp.empcity);
console.log(emp.empName);