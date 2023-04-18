let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];


function groupById(array) {
    //à noter : 
    //- la "valeur initiale" est un objet ",{}" (dernier argument de reduce). 
    //Cela indique que l'accumulateur sera un objet
    //- le 1er arg de la fonction callback, qui est l'accumulateur
    //- le 2ème arg de la fonction callback, qui représente chaque item du tableau
    //la ligne "obj[value.id] = value;" permet d'ajouter au tableau obj 
    //(du fait de la nature de valeur initiale) un objet ayant pour clé "value.id" (chaque item transmis)
    //enfin, "return obj;" retourne l'objet indexé, ce qui fait grandir le tableau d'accumulateurs
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

let usersById = groupById(users);

/*
// after the call we should have:
 
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

console.log('usersById: ', usersById);
console.log('john', usersById.john);

