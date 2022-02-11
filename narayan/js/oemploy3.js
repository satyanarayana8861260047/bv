function employee(id,name,salary){   //property3
    this.id = id;
    this.name = name;
    this.salary = salary;

    this.work = function() {       //behavior1
        console.log(this.name, + ' is working');
    }

    this.play = function(){        //behavior2
        console.log(this.name, + ' is playing');
    }
    this.riseSalary = function(percentage) {
        this.salary = this.salary + (this.salary/100*percentage);

    }
}

let emp1 = new employee(123,'narayan',606060);
let emp2 = new employee(1000,'vadhiraj',10000);
emp2.riseSalary(10);
console.log(emp2);

emp1.riseSalary(100);
console.log(emp1);
