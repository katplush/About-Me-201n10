'use strict';

var userPoints = 0;

//Introducion to Guessing Game

console.log('About Me Guessing Game Introductions');

alert('Hello! My name is Kat! Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('Hi ' + user + '! I am so glad you want to play my game!');

// Questions 1-5
function questionYN( q, correctAns, goodJob, oops) {
  var input = prompt(q, 'type yes or no').toLowerCase();

  console.log(q, 'User guessed:' , input);

  if (correctAns === false && (input === 'no' || input === 'n')) {
    userPoints++;
    console.log('User guessed correct; a point was added');
    alert(goodJob);
    alert('You have ' + userPoints + ' points out of 7.');
  } else if (correctAns === true && (input === 'yes' || input === 'y')) {
    userPoints++;
    console.log('User guess correct; a point was added');
    alert(goodJob);
    alert('You have ' + userPoints + ' points out of 7.');
  } else {
    alert(oops);
    console.log('User did not guess correct; no points added');
  }
}

questionYN('Do I prefer chocolate to cheese?', false, 'Good job! You got it right', 'Chocolate is good but cheese is my jam!');
questionYN('Did I keep a secret pet chinchilla in my college dorm room?', false, 'Way to go!', 'Nope! But I had a secret pet python!');
questionYN('Do I prefer music to tv?', true, 'All right! You got it!', 'No way silly! Music is my aeroplane.');
questionYN('Did I grow up on the west coast?', false, 'Good job!', 'Nope, I grew up on the east coast in Mechanicsville, VA');
questionYN('Do I prefer 4th of July to Halloween?', true, 'Way to go!', 'Nope, 4th of July is definitely my favorite');

// Question 6

function questionNum(q, correctAns) {
  var tries = 4;

  for (let i = 0; i < tries; i++) {
    var input = prompt(q);
    var userGuessInt = parseInt(input);
    if(isNaN(userGuessInt)) {
      console.log('User entered non-numberic input');
      alert('Sorry you need to enter a numberic response.');
      continue;
    }

    if (userGuessInt === correctAns) {
      // correct
      alert('You\'ve guessed right! I\'ve lived in Rhode Island, Virginia, Florida and Washington');
      userPoints++;
      console.log('User guessed correct answer', input, '; A point was added');
      break;
    } else {
      //incorrect
      var tooHigh = userGuessInt > correctAns;

      if (tooHigh) alert ('Sorry you guessed too high, please try again!');
      else alert('Sorry you guessed too low, please try again!');
      console.log('User guessed: ', input, '; no points added.');
    }
  }
}
questionNum('How many states have I lived in?', 4);

//Question 7
function question7() {
  var q7 = 'Can you guess a name of one of my favorite singers or bands?';
  var favSingerBand = ['Cher','Weezer','The Coathangers', 'Stromae','Sia'];
  var maxTries = 6;

  //Ask question; compare user guess to answers in array
  for (let i = 0; i < maxTries; i++) {

    var doesItMatch = false;
    var userGuess = prompt(q7).toLowerCase();

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
}
question7();

alert('You have ' + userPoints + ' points out of 7. Thanks for playing ' + user + '!');
