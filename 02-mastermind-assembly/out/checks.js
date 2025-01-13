"use strict";
function isValidLength(userInput) {
    if (userInput.length == 1) {
        return true;
    }
    return false;
}
function isLetterInWord(character, listWord) {
    for (var i of listWord) {
        if (character == i) {
            return true;
        }
    }
    return false;
}
