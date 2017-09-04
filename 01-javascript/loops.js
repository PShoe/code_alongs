// console.log("loops");

// var result;
// var max = 20; // Test out different values for max
//
// for (var x = 1; x <= max; x += 1) {
//     if (x % 3 === 0 && x % 5 === 0) {
//       result = "fizzbuzz";
//     } else if (x % 3 === 0) {
//       result = "fizz";
//     } else if (x % 5 === 0) {
//       result = "buzz";
//     } else {
//       result = x;
//     }
//   console.log(result);
// }




var food;
console.log("start of loop");
for (count = 1; count <= 15; count += 1){
    if (count%5 === 0 && count%3 === 0){
        food = "CakePudding";
    } else if (count%5 === 0){
        food = "Pudding";
    } else if (count%3 === 0){
        food = "Cake";
    } else {
        food = count;
    }
    console.log (food);
};
console.log("end of loop");


var secretNumber = 42;
var guess = prompt('Please guess the secret number:');
guess = parseInt(guess);

while (guess !== secretNumber) {
        console.log(guess + '- this is not the secret number, please guess again!');
        guess = prompt('Sorry, enter another number:');
        guess = parseInt(guess);
    };
console.log('You guessed ' + guess + '! This is the number!');
