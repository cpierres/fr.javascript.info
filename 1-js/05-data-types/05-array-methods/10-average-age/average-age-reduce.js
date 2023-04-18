let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

function getAverageAge(users) {
    //return users.reduce((prev, user) => prev + user.age, 0) / users.length;

    //le dernier paramètre de reduce ",0" indique la valeur de départ et le type de l'accumulateur
    let theAgeMoyen = users.reduce((accumulateur, user) => accumulateur + user.age, 0) / users.length;
    return theAgeMoyen;
}

let ageMoyen = getAverageAge(arr)

console.log("ageMoyen", ageMoyen); // (25 + 30 + 29) / 3 = 28
