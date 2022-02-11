var emp = {
    Name : "jack",
    salary : 606060,
    city:"Benglore",

    set empcity(empcity){
        this.city = empcity;
    },
    set empName(empName){
        this.name = empName;
    }
};
emp.empcity = "Mangalore"
emp.empName = "Manasa";

console.log(emp["Name"]);
console.log(emp.city);