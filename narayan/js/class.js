class user {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(this.name);
    }
}
// Usage:
var user = new user("Narayana");
user.sayHi();