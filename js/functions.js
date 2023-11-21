export function capitalize(string) {
    return (string.slice(0,1)).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i]
    }
    return reversedString;
}
