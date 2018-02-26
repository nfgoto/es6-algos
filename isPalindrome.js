/**
 *  IS PALINDROME ALGORITHM
 *  
 * Take string input and check if is palindrome
 *  - ignoring punctuation and case
 *  - without regex
 * 
 * @param {*} stringInput 
 */
const isPalindrome = stringInput => {
    // spread operator to create array of characters
    const iCharArr = [ ...( stringInput.toLowerCase().trim() ) ];
    const validCharacters = [...'azertyuiopmlkjhgfdsqwxcvbn'];

    // create an array containing only valid characters
    let validICharArr = [];
    iCharArr.forEach( char => {
        if(validCharacters.includes(char))  
            validICharArr.push(char);
    });

    const original = validICharArr.join('')
    const reverse = validICharArr.reverse().join('')
    
    return console.log(`"${stringInput}" is ${original === reverse  ? '' : 'not '}a palindrome`);
};

isPalindrome(process.argv[2] || "Madam, I'm Adam");