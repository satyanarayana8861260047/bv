var myCar = new Object(); //object constructor
    myCar.name = "Tiago",
   myCar.model = 2018,
    myCar.color = "Orange",
   myCar.speed = 0,
    myCar.move = function() {
         this.speed++;
    }

    console.log(myCar.name);
    console.log(myCar["model"]);
    console.log(myCar.color);
    myCar.move();

    console.log(myCar.speed);

    