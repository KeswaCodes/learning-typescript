import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';
import { string } from "yargs";
declare var myGlobal : undefined | string;


function getRandomWord(): void {
    const fileContent = fs.readFileSync("src/words.csv", { encoding: 'utf-8' }); // soon to create function to read file, passing an argument to the function 
    let result = undefined;
    parse(fileContent, {
    delimiter: ','
  }, (error, word: string[]) => {
    if (error) {
      console.error(error);
    }
    var myVar = Math.floor(Math.random() * (word.length - 0) + 0);
    var randomListWords = word.at(myVar);
    result = randomListWords?.at(myVar == randomListWords.length ? 0 : myVar);
    console.log("Here is the random word: " + result);
});
}

function hideLetters(chosenWord : string): string[] {

    var first = Math.floor(Math.random() * (chosenWord.length - 0) + 0);
    // TODO: create function to make sure the numbers generated are not the same 
    var second = Math.floor(Math.random() * (chosenWord.length - 0) + 0);
    var result: string[] = [];

    // TODO: create a function returning just the hidden word as a list
    for(var i = 0; i < chosenWord.length; i++) {
        i == first || second? result.push(chosenWord.at(i) || " ") : result.push("__"); // this part hides the letter in the random index
    }
    
    return result;
    
}
