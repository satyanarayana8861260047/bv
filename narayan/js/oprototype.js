function employee(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}
employee.prototype.city = "Not specified";
employee.prototype.dosomething = function(){
    console.log(this.name + " is doing something");
};
emp1 = new employee(11,"Jack",5050);
emp2 = new employee(12,"Mack",6060);

console.log(emp1.name);
console.log(emp2.name);

emp1.city = 'Benglore';

console.log(emp1.city);
console.log(emp2.city);

emp1.dosomething();
emp2.dosomething2();


