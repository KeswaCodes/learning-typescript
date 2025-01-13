"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    // const promptSync = require('prompt-sync')();
    // let age = promptSync("How old are you? ");
    let age = prompt("How old are you? ");
    console.log(`The user's age is: ${age}`);
}
getUserInput();
