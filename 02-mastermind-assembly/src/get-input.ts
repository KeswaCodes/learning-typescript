/**
 * This module deals with all the input & output operations of the game
 * welcomeUser() welcomes user to the game & introduces controls & rules
 * getUserInput() gets input from user and returns the value
 */




// function welcomeUser(): void {
//     console.log("Welcome to the Mastermind game...");
//     console.log("Here are the rules...");
//     console.log("Play well and enjoy! ");
// }


async function welcomeUser(){
    let listPhrases = ["Here are the rules...", "Play well and enjoy! "];
    var element = document.getElementById("main-heading");
    for(let phrase of listPhrases) {
        console.log(phrase);
        if(element) {element.textContent = phrase;}
        await sleep(2000);
    }
    

}


function getUserInput() : string {
    let letter = prompt("What letter do you think is missing from the word?: ");
    return letter == null ? letter || " " : " ";
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}