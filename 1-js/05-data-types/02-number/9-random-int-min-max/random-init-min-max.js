function randomIntegerKO(min, max) {
    let rand = min + Math.random() * (max - min); 
    return Math.round(rand);
  }

function randomIntegerV1(min, max) {
    // maintenant rand est entre (min-0.5) et (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function randomIntegerV2(min, max) {
    // ici rand est de min à (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}


console.log(randomIntegerV1(1, 5));
console.log(randomIntegerV2(1, 5));
console.log(randomIntegerV1(1, 5));
console.log(randomIntegerV2(1, 5));