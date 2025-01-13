// "use strict";
/**
 * This module deals with all the input & output operations of the game
 * welcomeUser() welcomes user to the game & introduces controls & rules
 * getUserInput() gets input from user and returns the value
 */
function welcomeUser() {
    console.log("Welcome to the Mastermind game...");
    console.log("Here are the rules...");
    console.log("Play well and enjoy! ");
}
function getUserInput() {
    let letter = prompt("What letter do you think is missing from the word?: ");
    return letter == null ? letter || " " : " ";
}
