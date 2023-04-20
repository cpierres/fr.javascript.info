function inBetween(a, b) {
    // fonction retournée et attendue par le callback de Array.filter()
    return function (x) {
        return x >= a && x <= b;
    };
}

function inArray(arr) {
    // ...your code...
    return function (x) {
        return arr.includes(x);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

//filter prend une fonction callback qui prend en principal le param value (parcourant chaque item du tableau)
//la fonction inBetween transmet les arguments à la sous-fonction anonyme ayant l'argument value qui est nécessaire à filter
//cette sous-fonction est retournée par intBetween
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2