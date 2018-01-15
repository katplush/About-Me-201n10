'use strict';

var userPoints = 0;

//Introducion to Guessing Game

console.log('About Me Guessing Game Introductions');

alert('Hello! My name is Kat! Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('Hi ' + user + '! I am so glad you want to play my game! Please guess Yes or No for each question.');

//Question 1
var q1 = 'Do I prefer chocolate to cheese?';
var answer = prompt(q1).toLowerCase();

console.log('User guessed:' , answer, ' to question: ', q1);

if (answer === 'no' || answer === 'n') {
  //if it's correct give them a point
  userPoints++;
} else {
  //if it's not correct, explain correct answer
  alert('Nope! I love me some chocolate but cheese is my jam.');
}

//Question 2
var q2 = 'Did I keep a secret pet chinchilla in my college dorm room?';
answer = prompt(q2).toLowerCase();

console.log('User guessed:' , answer, ' to question: ', q2);

if (answer === 'no' || answer === 'n') {
  //if it's correct give them a point
  userPoints++;
} else {
  //if it's not correct, exlain correct answer
  alert('Nope! But I had a secret pet python!');
}

//Question 3
var q3 = 'Do I prefer music to TV?';
answer = prompt(q3).toUpperCase();

console.log('User guessed:' , answer, ' to question: ', q3);

if (answer === 'YES' || answer === 'Y') {
  //if it's correct give them a point
  userPoints++;
} else {
  //if it's not correct, exlain correct answer
  alert('No way silly! Music is my aeroplane.');
}

//Question 4
var q4 = 'Did I grow up on the West Coast?';
answer = prompt(q4).toLowerCase();

console.log('User guessed:' , answer, ' to question: ', q4);

if (answer === 'no' || answer === 'n') {
  //if it's correct give them a point
  userPoints++; 
} else {
  //if it's not correct, exlain correct answer
  alert('Nope! I grew up on the East coast in Mechanicsville, VA!');
}

//Question 5
var q5 = 'Do I prefer 4th of July to Halloween?';
answer = prompt(q5).toUpperCase();

console.log('User guessed:' , answer, ' to question: ', q5);

if (answer === 'YES' || answer === 'Y') {
  //if it's correct give them a point
  userPoints++;
} else {
  //if it's not correct, exlain correct answer
  alert('Nope! 4th of July is definitely my favorite!');
}

//Question 6
var q6 = 'How many states have I lived in?';
var correctQ6Answer = '4';
var tries = 4;

for (let i = 0; i < tries; i++) {
  var userGuess = prompt(q6);

  console.log('User guessed: ', userGuess);

  if (userGuess === correctQ6Answer) {
  // correct.
    alert('You\'ve guessed right! I\'ve lived in Rhode Island, Virginia, Florida and Washington!');
    userPoints++;
    break;
  } else {
  // incorrect.
    var tooHigh = userGuess > correctQ6Answer;

    if (tooHigh) alert ('Sorry you guessed too high, please try again!');
    else alert('Sorry you guessed too low, please try again!');
  }
}

//Question 7
var q7 = 'Can you guess a name of one of my favorite singers or bands?';
var favSingerBand = ['Cher','Weezer','The Coathangers', 'Stromae','Sia'];
var maxTries = 6;

//Ask question; compare user guess to answers in array
for (let i = 0; i < maxTries; i++) {

  var doesItMatch = false;
  userGuess = prompt(q7).toLowerCase();

  for (var a_i = 0; a_i < favSingerBand.length; a_i++) {
    console.log('User guessed: ', userGuess);

    if  (userGuess === favSingerBand[a_i].toLowerCase()) {
      // correct.
      console.log('User guessed a correct answer.');
      alert('Wow, you are good!');
      userPoints++;
      doesItMatch = true;
      break;
    }
  }

  if (doesItMatch) {
    break;
  }
}
alert('Good effort! Here are just a few of my favorites: ' + favSingerBand.join(', '));

alert('You have ' + userPoints + ' points out of 7. Thanks for playing ' + user + '!');
