const readlineSync = require('readline-sync');

/**
 * Get a character from user
 * @param {string} [promptText=''] The text to be displayed to the user on the console before input.
 * @param {boolean} reAskOnChars Array of characters for which input will not be accepted and
 *  user will be asked to enter input again.
 * @returns
 */
function readChar(promptText = '', paramObject = {}) {
    let reAskOnChars = paramObject.reAskOnChars ? paramObject.reAskOnChars : [];
    let input;
    do {
        input = readlineSync.keyIn(promptText);
    } while (reAskOnChars && reAskOnChars.includes(input));    
    return input;
}

/**
 * Get an integer number from user
 * @param {string} [promptText=''] The text to be displayed to the user on the console before input.
 * @returns
 */
function readInteger(promptText = '') {
    let input;
    input = readlineSync.questionInt(promptText);
    return input;
}

/**
 * Get a floating point number from user
 * @param {string} [promptText=''] The text to be displayed to the user on the console before input.
 * @returns
 */
function readFloat(promptText = '') {
    let input;
    input = readlineSync.questionFloat(promptText);
    return input;
}

/**
 * Get a string from user
 * @param {string} [promptText=''] The text to be displayed to the user on the console before input.
 * @returns
 */
function readLine(promptText = '') {
    return readlineSync.question(promptText);
}

/**
 * Get a number array
 * @param {string} [promptText=''] The text to be displayed to the user on the console before input.
 * It can be either 'space' or 'enter'
 * @param {object} paramObject It can have the following properties
 * @property {boolean} [reInputOnError=false] Again ask user for input
 * @property {string} [seperator='space'] Which type of seperator to be used.
 * @property {number} [size=1] The size of the array to enter
 * @returns
 */
function readNumberArray(promptText = '', paramObject = {}) {
    let input;
    let inputArray = [];
    let reInputOnError, seperator, size;

    reInputOnError = paramObject.reInputOnError ? paramObject.reInputOnError : false;
    seperator = paramObject.seperator ? paramObject.seperator : 'space';
    size = paramObject.size ? paramObject.size : 1;

    seperator = seperator.toLowerCase();
    if (seperator === 'enter') {
        promptText.length > 0 ? console.log(promptText) : '';
        for (let index = 0; index < size; index++) {
            inputArray.push(readlineSync.questionInt());
        }
    }
    else {
        input = readlineSync.question(promptText);
        inputArray = input.split(' ');
        for (let index = 0; index < inputArray.length; index++) {
            const element = inputArray[index];
            if (isNaN(parseInt(element, 10))) {
                if (reInputOnError) {
                    console.log('\nWrong input entered, Enter Again\n');
                    input = readlineSync.question(promptText);
                    inputArray = input.split(' ');
                    index = 0;
                }
                else {
                    console.log('Wrong input entered');
                    process.exit();
                }
            }
        }
    }
    return inputArray;
}

/**
 * Get an generic array.
 * @param {string} [promptText=''] The text to be displayed to the user on the console before input.
 * @param {object} paramObject It can have the following properties
 * @property {string} [seperator='space'] Which type of seperator to be used.
 * It can be either 'space' or 'enter'
 * @property {number} [size=1] The size of the array to be entered
 * @returns {array} The array entered by the user 
 */
function readArray(promptText = '', paramObject = {}) {
    let input;
    let inputArray = [];
    let seperator, size;
    
    seperator = paramObject.seperator ? paramObject.seperator : 'space';
    size = paramObject.size ? paramObject.size : 1;
    
    seperator = seperator.toLowerCase();
    if (seperator === 'enter') {
        promptText.length > 0 ? console.log(promptText) : '';
        for (let index = 0; index < size; index++) {
            inputArray.push(readlineSync.question());
        }
    }
    else {
        input = readlineSync.question(promptText);
        inputArray = input.split(' ');
    }
    return inputArray;
}

/**
 * Get the true or false value entered by user on the console.
 * @param {string} [promptText=''] The text to be displayed to the user on the console before input.
 * @returns {boolean} The true/false value entered by user
 */
function readBoolean(promptText = '') {
    let input = readlineSync.question(promptText);
    input = input.toLowerCase();
    if (input === 'false') {
        return false;
    }
    else if (input === 'true') {
        return true;
    }
    else {
        console.log('Enter correct value [true or false]');
        return readBoolean();
    }
}

/**
 * Wait till user presses something
 * @param {string} [promptText=''] The text to be displayed to the user on the console before input.
 * @returns {undefined} Just to signify that user has entered something.
 */
function wait(promptText = '') {
  return readlineSync.keyInPause(promptText);
}

exports = module.exports = {
    readChar,
    readInteger,
    readFloat,
    readLine,
    readNumberArray,
    readArray,
    readBoolean,
    wait
};
