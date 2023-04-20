function makeCounter() {
    let count = 0;
    // ... votre code ...

    //la sous-fonction retourne la variable interne
    function counter() {
        return count++;
    }

    //sous-fonction qui permet de modifier la variable interne
    counter.set = value => count = value;

    //sous-fonction qui permet de modifier la variable interne
    counter.decrease = () => count--;

    //retour de la function counter qui elle-même retourne la variable interne count
    return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // définir le nouveau "count"

console.log(counter()); // 10

counter.decrease(); // diminuer de 1 le "count"

console.log(counter()); // 10 (au lieu de 11)