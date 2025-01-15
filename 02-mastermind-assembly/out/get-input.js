"use strict";
/**
 * This module deals with all the input & output operations of the game
 * welcomeUser() welcomes user to the game & introduces controls & rules
 * getUserInput() gets input from user and returns the value
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// function welcomeUser(): void {
//     console.log("Welcome to the Mastermind game...");
//     console.log("Here are the rules...");
//     console.log("Play well and enjoy! ");
// }
function welcomeUser() {
    return __awaiter(this, void 0, void 0, function* () {
        let listPhrases = ["Here are the rules...", "Play well and enjoy! "];
        var element = document.getElementById("main-heading");
        for (let phrase of listPhrases) {
            console.log(phrase);
            if (element) {
                element.textContent = phrase;
            }
            yield sleep(2000);
        }
        // console.log(window.location.href);
        yield sleep(2000);
        window.location.href += "testing";
    });
}
function getUserInput() {
    let letter = prompt("What letter do you think is missing from the word?: ");
    return letter == null ? letter || " " : " ";
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function createElement() {
    const childElement = document.createElement("button");
    const parentElement = document.getElementById("body");
    childElement.textContent = "Bosso";
    childElement.addEventListener("click", () => { console.log("You did it baby girl"); });
    parentElement === null || parentElement === void 0 ? void 0 : parentElement.append(childElement);
}
