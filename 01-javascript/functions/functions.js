console.log('this working?');

// 23 celsius
//f = (c * (9/5)+32)

//var fahrenheit = 23 * (9/5)+32;

//console.log('fahrenheit: ' + fahrenheit);


//var celsius = 23;
var temp;

var celsiusToFahrenheit = function(temp){
  fahrenheit = ((9 / 5) * temp) + 32;
  return fahrenheit;
}



// The Age Calculator

var calculateAge = function(birth){
    var current = (new Date()).getFullYear();
    age = current - birth;
    age2 = current - (birth +1);
    return "If your birth year is " + birth + ". You could be: " + age + " or " + age2 + ".";
}
console.log(calculateAge(1990));
console.log(calculateAge(1981));
console.log(calculateAge(1954));

//The Lifetime Supply Calculator

var calculateSupply = function (age,amtDay,food) {
    supply = age * amtDay;
    return "You will need " +supply+ " pounds of " + food + " to last you until the ripe old age of " + age + "!";
};

console.log(calculateSupply(35,2,'cheese'));
console.log(calculateSupply(3,4,'melons'));
console.log(calculateSupply(16,20,'pies'));


//The Geometrizer

var calcCiccumfrence = function (radius){
    circum = radius * 2 * 3.14159;
    area = radius * radius * 3.14159;
    return "The circumfernce is " + circum + " and the area is " + area + ".";
}

console.log(calcCiccumfrence(3));
console.log(calcCiccumfrence(12.5));
console.log(calcCiccumfrence(10));


var numbers = [2,3,5];

var myForEach = function(arr,funct){
    for (i = 0; i < arr.length; i++){
        funct(arr[i]);
    }
};

var doubleAndLog = function(num){
    console.log(num * 2);
};
var somethingElse = function (num){
    console.log(num * 34 + 3)
}

var reverseWords = function(element){
    element[i].reverse();
}

myForEach("This is my sentence",reverseWords);

//return a string with the order of the words reversed
