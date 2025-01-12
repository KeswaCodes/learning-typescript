"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const csv_parse_1 = require("csv-parse");
function getRandomWord() {
    const fileContent = fs.readFileSync("src/words.csv", { encoding: 'utf-8' }); // soon to create function to read file, passing an argument to the function 
    let result = undefined;
    (0, csv_parse_1.parse)(fileContent, {
        delimiter: ','
    }, (error, word) => {
        if (error) {
            console.error(error);
        }
        var myVar = Math.floor(Math.random() * (word.length - 0) + 0);
        var randomListWords = word.at(myVar);
        result = randomListWords === null || randomListWords === void 0 ? void 0 : randomListWords.at(myVar == randomListWords.length ? 0 : myVar);
        console.log("Here is the random word: " + result);
    });
}
function hideLetters(chosenWord) {
    var first = Math.floor(Math.random() * (chosenWord.length - 0) + 0);
    // TODO: create function to make sure the numbers generated are not the same 
    var second = Math.floor(Math.random() * (chosenWord.length - 0) + 0);
    var result = [];
    // TODO: create a function returning just the hidden word as a list
    for (var i = 0; i < chosenWord.length; i++) {
        i == first || second ? result.push(chosenWord.at(i) || " ") : result.push("__"); // this part hides the letter in the random index
    }
    return result;
}
console.log(hideLetters("Zee"));
