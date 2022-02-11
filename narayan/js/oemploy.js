let emp1 = new Object();

emp1.id = 123;
emp1.name = 'Narayan';
emp1.doWork = function() {
    console.log(this.name + ' is working');
}
console.log(emp1);
emp1.dowork();


let emp2 = new Object();

emp2.song = 'kyon ki itana ';
emp2.artist = 'Arman malik';
emp2.singsong = function(){
    console.log(this.song + ' is singing');
}
console.log(emp2);
emp2.singsong();