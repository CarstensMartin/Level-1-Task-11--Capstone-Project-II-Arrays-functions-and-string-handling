// Create a program that is a cypher to change user input by 15 letters in a closed cycle (a to z) and (A to Z) - Thus cyclical
//All other values to remain the same example '!' to remain '!'

//Ask user to enter the message to be encoded
let originalWord = prompt("Please enter a message that you want to encode:")

//Set variable by how many letters to do you want to change the cypher
let lettersMove = 15

//Identify the length of the word in order to know how many time the For loop must run
let wordLength = originalWord.length

//Make use of th Ascii system to move each letter 15 spaces

/*General information:
- Ascii value A = 65, Z = 90,  a = 97 , z = 122
- (A to Z) and (a to z) Alphabet has 26 letters*/

//Identify variable Ascii word to store the ascii values of the word in an array
let asciiWord = []

//Get the Ascii values of the word and form it into an array
//Create a for loop that will stop at the end of the word length
for (i = 0; i < wordLength; i++) {
    //Use the convert of charCodeAt for each letter to the Ascii value and push/ add it to the array
    asciiWord.push(originalWord.charCodeAt(i));
}

//Identify variable new word to be created
let newWord = []

//Create a For loop that will convert each Ascii value to the new modified character (+15)
for(i=0;i<wordLength;i++){
    //122 is tha Ascii value of 'z' so if the value is bigger, then we -26 positions to start at a again.
    //And must also be less than or equal to (122 + lettersMoved) otherwise will also change the special characters and other Acii values
    if((asciiWord[i]+lettersMove)>122 &&
    (asciiWord[i]+lettersMove)<=(122+lettersMove)
    ){
        //Add the character with the Ascii value + lettersMoved(15) - 26 because after z
        newWord.push(String.fromCharCode((asciiWord[i]+lettersMove-26)))
    }
    
    // Ascii answer between or equal to (97(a value) + lettersMove) and 122(z value)
    else if ((asciiWord[i]+lettersMove)>= (97+lettersMove) &&
    (asciiWord[i]+lettersMove)<= 122
    ){
        //Add the character with the Ascii value + 15 places
        newWord.push(String.fromCharCode((asciiWord[i]+lettersMove)))
    }
    
    //90 is the Ascii value of 'Z', lettersMove for the new Ascii value bigger than 90 and smaller than or equal to (90 + lettersMove) need to -26 letters because running after Z
    else if((asciiWord[i]+lettersMove) > 90 &&
    (asciiWord[i]+15) <= (90 + lettersMove)){
        //Add the character with the Ascii value + lettersMoved(15) - 26 because after Z
        newWord.push(String.fromCharCode((asciiWord[i]+lettersMove-26)))
    }
     
    // Ascii answer between or equal to (65(A value) + lettersMove) and 90(Z value)
    else if ((asciiWord[i]+lettersMove)>= (65+lettersMove) &&
    (asciiWord[i]+lettersMove)<= 90
    ){
        //Add the character with the Ascii value + 15 letters
        newWord.push(String.fromCharCode((asciiWord[i]+lettersMove)))
    }
    
    //Else if the characters are not between (A to Z) and (a to z) - it must return the current value example '@' is '@'
    else {newWord.push(String.fromCharCode(asciiWord[i]))}
}

//Create a string from the array of letters
newWord = newWord.join("")

//Output on console the new encrypted message
console.log("Your encoded message is: \n" + newWord)