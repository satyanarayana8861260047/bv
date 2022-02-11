let time = 15;
let greeting = 'Not Set Yet';
if (time < 10 ) {
    greeting = "Good morning";
} else if (time < 20 ) {
    greeting = "good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);