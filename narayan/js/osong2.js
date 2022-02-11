function employee(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;

}
let employee1 = new employee(101,'vadiraj',3333);
let employee2 = new employee(102,'druvaraj',4444);
let employee3 = new employee(103,'shyam',55555);
console.log(typeof employee1);
console.log(employee1);
console.log(employee2);
console.log(employee3);