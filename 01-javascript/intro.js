// console.log ("hello javascript");
// console.log ("hello again");
// console.log ("goodbye");

// AGE EXERCISE ------------

var age = 15;
if (age < 21) {
	console.log('You are too young to drink in the USA');
} else {
	console.log('Drink up!');
};

// DATE EXERCISE -----------

var year = new Date()
if (year.getFullYear() === 2017){
	console.log("I'm in the present and the year is " + year.getFullYear());
} else if (year.getFullYear() > 2017) {
	console.log("Greetings from the future!");
} else {
	console.log("Whoa! Blast from the past!");
};

var yearTest = 2016
if (yearTest === 2017){
	console.log("I'm in the present! and the year is " + yearTest);
} else if (yearTest > 2017) {
	console.log("Greetings from the future!");
} else {
	console.log("Whoa! Blast from the past!");
};
