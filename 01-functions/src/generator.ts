import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';


function getRandomWord(): void{
    const fileContent = fs.readFileSync("src/words.csv", { encoding: 'utf-8' });


    let result = undefined;
    parse(fileContent, {
    delimiter: ','
  }, (error, word: string[]) => {
    if (error) {
      console.error(error);
    }
    var myVar = Math.floor(Math.random() * (word.length - 0) + 0); // The maximum is inclusive and the minimum is inclusive
    var randomListWords = word.at(myVar);

    result = randomListWords?.at(myVar == randomListWords.length ? 0 : myVar);
});
}

getRandomWord();