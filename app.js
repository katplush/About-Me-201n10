'use strict'; 

var userPoints = 0;

console.log('hello world');

alert('Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('Hi ' + user + ' ! I am so glad you want to play my game!');

var answer = prompt('Is Rachel\'s favorite food kimchi?' , 'type yes or no').toLowerCase();

console.log(answer);

//check if the user's answer is correct
//what is correct?
//find out what the answer is?
//toLowerCase or toUpperCase
//use a confirm box?

if (answer === 'yes' || answer === 'y') {
    //if it's correct give them a point
    userPoints++; 
} else {
    //if it's not correct, tell them to try agian
    alert('Nope! I love allll spicy food.');
}

alert('you have' + userPoints + ' points.');