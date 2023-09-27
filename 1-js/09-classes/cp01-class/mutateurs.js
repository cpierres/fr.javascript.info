class User {
    constructor(name) {
        this.name = name;// invoque l'accesseur (le setter)
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if(value.length < 4) {
            console.log(`Le nom ${value} est trop court`);
            return;
        }
        this._name = value;
    }
}

let user = new User("Test");
console.log(user.name);

let user2 = new User("ab");
console.log(user2.name);
