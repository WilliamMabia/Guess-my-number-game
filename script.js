'use strict';

/**
 * Pass in a selector - for excample we want to select the 'message' class 
 * This query selector is the entry point ot the DOM
 * *
console.log(document.querySelector('.message').textContent);

/**
 * Document Object Model (DOM)
 * Structured representation of HTML documents
 * Allows Javascript ot access HTML Styles and elements and manipulate them
 * The DOM acts as the connection point between HTML code and Javascript
 * DOM Manipulation - making javascript interact with the webpage
 * DOM is part of the WEB Apis we can access from our javascript code
 * DOM is a library written in Javascript
 * Examples of some API's - DOM, Timer, Fetch
 * Good practice to not let dom hold variables like state variables
 *

/**
 * .value vs .textContent
 * Any node has a "textContent", including text nodes which are not elements. It represents the text content of the node itself along with any and all descendants.
 * 
 * But only input elements have a "value". 
 * It represent the input data supplied by the user or provided initially by the code. Also, input elements may have a "textContent" property but it will always be empty since they are void elements.
 * 
 * Usually when we over write somethign the user sees on screen we use text content
 * When we want to take an input from user we use value
 * When we want to reset we also use value
 *

document.querySelector('.message').textContent = "That's sick new content"
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 60;
console.log(document.querySelector('.guess').value);


/***
alert(
  "How to Play: It's simple! Guess a number between 1 and 20. Everytime you fail your score goes down"
);
*/
let userScore = 20;
let highscore = 0;

/** Get a random number between 1 & 20 for the game */
let randNum = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = randNum;

/**
 * This add Event listener is like Java
 * "addEventListener(input type, function)"
 * */
document.querySelector('.check').addEventListener('click', function () {
  /**This function logs to console what's from the guess class */
  const userInput = document.querySelector('.guess').value;

  if (userScore >= 1) {
    // If player enters no input
    if (!userInput) {
      document.querySelector('.message').textContent = '⛔️ Invalid Input';

      // If payer wins
    } else if (userInput == randNum) {
      document.querySelector('.message').textContent = 'Correct!';
      document.querySelector('.number').textContent = randNum;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (userScore > highscore) {
        highscore = userScore;
        document.querySelector('.highscore').textContent = highscore;
      }

      // If player's guess is too high
    } else if (userInput > randNum) {
      document.querySelector('.message').textContent = 'Too High';
      userScore--;
      document.querySelector('.score').textContent = userScore;

      // If player's guess is too low
    } else if (userInput < randNum) {
      document.querySelector('.message').textContent = 'Too Low';
      userScore--;
      document.querySelector('.score').textContent = userScore;
    }
  } else {
    //if player loses the game
    document.querySelector('.message').textContent = '⚒ You lost the game!';
    document.querySelector('.score').textContent = 0;
  }
});

/**To change the css styling of the page =  select body -> access style style -> name of property you intend to change
 * Note all css names that have hyphen like background-color changes to backgroundColor in javascript
 * This kinda styles are inline styles and doesn't actually alter the css file
 *
 * Sample below
 *
 * document.querySelector('1').2.3 = '4';
 * 1 = whole html body, element, id, or class you need to select
 * 2 = will be style
 * 3 = attributes like backgroundColor or width and stuff like that you want to change
 * 4 = what you want to change the attribue to; text align can be center, and background color cna be black or something like that
 * note: wherever the quotation marks are to be used as is here
 *
 * Example:
 * 1. document.querySelector('body').style.backgroundColor = '#60b347';
 * 2. document.querySelector('.number').style.width = '30rem';
 */

let checkHighScore = function (score) {};

/**reloading the page can basically rest all this but we don't want to see that alert anymore so we do it the oldfashioned way by changing var values */

document.querySelector('.again').addEventListener('click', function () {
  //window.location.reload();
  //Reset all the contents
  userScore = 20;
  randNum = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = userScore;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
