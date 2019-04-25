const readlineSync = require('readline-sync');

/**
 * Get a character from user
 * @param {string} [promptText=''] The text to be displayed to the user on the console before input.
 * @param {boolean} reAskOnChars Array of characters for which input will not be accepted and
 *  user will be asked to enter input again.
 * @returns
 */
function getChar(promptText = '', reAskOnChars) {
    let input;
        input = readlineSync.keyIn(promptText);
        if (reAskOnChars && reAskOnChars.includes(input)) {
           // Again ask for input
           getChar(promptText, reAskOnChars);
        }
    return input;
}

/**
 * Get an integer number from user
 * @param {string} [promptText=''] The text to be displayed to the user on the console before input.
 * @returns
 */
function getInteger(promptText = '') {
    let input;
    input = readlineSync.questionInt(promptText);
    return input;
}

/**
 * Get a floating point number from user
 * @param {string} [promptText=''] The text to be displayed to the user on the console before input.
 * @returns
 */
function getFloat(promptText = '') {
    let input;
    input = readlineSync.questionFloat(promptText);
    return input;
}

/**
 * Get a string from user
 * @param {string} [promptText=''] The text to be displayed to the user on the console before input.
 * @returns
 */
function getLine(promptText = '') {
    return readlineSync.question(promptText);
}

/**
 * Get a number array
 * @param {string} [seperator='enter'] Which type of seperator to be used.
 * It can be either 'space' or 'enter'
 * @param {boolean} reInputOnError Again ask user for input
 * @param {string} [promptText=''] The text to be displayed to the user on the console before input.
 * @param {number} size The size of the array to enter
 * @returns
 */
function getNumberArray(seperator = 'enter', reInputOnError, promptText = '', size) {
    let input;
    let inputArray = [];
    if (seperator === 'space') {
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
    else {
        console.log(promptText);
        for (let index = 0; index < size; index++) {
            inputArray.push(readlineSync.questionInt());
        }
    }
    return inputArray;
}

/**
 * Get an generic array.
 * @param {string} [seperator='enter'] Which type of seperator to be used.
 * It can be either 'space' or 'enter'
 * @param {string} [promptText=''] The text to be displayed to the user on the console before input.
 * @param {*} size The size of the array to be entered
 * @returns {array} The array entered by the user 
 */
function getArray(seperator = 'enter', promptText = '', size) {
    let input;
    let inputArray = [];
    if (seperator === 'space') {
        input = readlineSync.question(promptText);
        inputArray = input.split(' ');
    }
    else {
        console.log(promptText);
        for (let index = 0; index < size; index++) {
            inputArray.push(readlineSync.question());
        }
    }
    return inputArray;
}

/**
 * Get the true or false value entered by user on the console.
 * @param {string} [promptText=''] The text to be displayed to the user on the console before input.
 * @returns {boolean} The true/false value entered by user
 */
function getBoolean(promptText = '') {
    let input = readlineSync.question(promptText);
    input = input.toLowerCase();
    if (input === 'false') {
        return false;
    }
    else if (input === 'true') {
        return true;
    }
    else {
        return getBoolean(promptText);
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
    getChar,
    getInteger,
    getFloat,
    getLine,
    getNumberArray,
    getArray,
    getBoolean,
    wait
};
