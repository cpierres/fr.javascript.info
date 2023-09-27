class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hi ${this.name} !`);
    }
}

const user = new User("Test");
user.sayHi();