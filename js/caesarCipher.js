// we have a caesar cipher function that takes a string and a number that represents how many letters we shift each letter in the string
// we will a loop that loops through the string
// at each iteration, we will run a shift function that takes a letter and 

/*
declare function with parameters
    declare result variable
    for loop
        conditional that checks if there's a space or punctuation
             if there is, just add to the result variable and then continue
        each iteration, we get the current letter from the string,
        pass that letter as an argument to a shift function
        add that letter to our result variable
    return our result variable
*/

export const caesarCipher = (string, shift = 3) => {
    string = string.toLowerCase();
    let cipher = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            cipher += ' '
            continue
        }
        cipher += shifter(string[i], shift)
    }
    return cipher
}

const shifter = (letter, shift) => {
    // get the charcode of letter,
    //  shift it be shift, 
    // and then convert that number into a letter
    let cipher = letter.charCodeAt(0) + shift;

    if (cipher > 122) cipher -= 26;
  
    return String.fromCharCode(cipher);
}