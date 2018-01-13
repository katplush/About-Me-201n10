'use strict'; 

//check if the user's answer is correct
//what is correct?
//find out what the answer is?
//toLowerCase or toUpperCase
//use a confirm box?

var userPoints = 0;

console.log('About Me Guessing Game Introductions');

alert('Hello! My name is Kat! Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('Hi ' + user + '! I am so glad you want to play my game! Please guess Yes or No for each question.');

var q1 = 'Do I prefer chocolate to cheese?'
var answer = prompt(q1).toLowerCase();

console.log("User guessed:" , answer, " to question: ", q1);

if (answer === 'no' || answer === 'n') {
    //if it's correct give them a point
    userPoints++; 
} else {
    //if it's not correct, explain correct answer
    alert('Nope! I love me some chocolate but cheese is my jam.');
}
/*
//Question 2
var answer = prompt('').toLowerCase();

console.log(answer);

if (answer === 'yes' || answer === 'y') {
    //if it's correct give them a point
    userPoints++; 
} else {
    //if it's not correct, exlain correct answer
    alert('');
}

//Question 3
var answer = prompt('').toLowerCase();

console.log(answer);

if (answer === 'yes' || answer === 'y') {
    //if it's correct give them a point
    userPoints++; 
} else {
    //if it's not correct, explain correct answer
    alert('');
}

//Question 4
var answer = prompt('').toLowerCase();

console.log(answer);

if (answer === 'yes' || answer === 'y') {
    //if it's correct give them a point
    userPoints++; 
} else {
    //if it's not correct, explain correct answer
    alert('');
}

//Question 5
var answer = prompt('').toLowerCase();

console.log(answer);

if (answer === 'yes' || answer === 'y') {
    //if it's correct give them a point
    userPoints++; 
} else {
    //if it's not correct, expain correct answer
    alert('');
}

alert('you have' + userPoints + ' points.');
*/