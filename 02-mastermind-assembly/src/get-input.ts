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

    // console.log(window.location.href);

    await sleep(2000);
    window.location.href += "testing";


    

}


function getUserInput() : string {
    let letter = prompt("What letter do you think is missing from the word?: ");
    return letter == null ? letter || " " : " ";
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function createElement(): void {

    const childElement = document.createElement("button");
    const parentElement = document.getElementById("body");
    childElement.textContent = "Bosso";
    childElement.addEventListener("click", () => {console.log("You did it baby girl");});
    parentElement?.append(childElement);
    
    
    
}