function isValidLength(userInput : string) : boolean {
    if(userInput.length == 1) {return true;}
    return false;
}

function isLetterInWord(character: string, listWord: string[]): boolean {
    for(var i of listWord) {if(character == i) {return true;}}
    return false;
}

