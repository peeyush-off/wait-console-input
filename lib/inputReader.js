const readlineSync = require('readline-sync');

/**
 * Function use: Get a character from user
 * @param {string} promptText The text to be displayed to the user on the console before input. Default is empty string "".
 * @param {boolean} reAskOnChars Array of characters for which input will not be accepted and
 *  user will be asked to enter input again.  Default is an empty array.
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
 * Function use: Get an integer number from user
 * @param {string} promptText The text to be displayed to the user on the console before input. Default is empty string "".
 */
function readInteger(promptText = '') {
    let input;
    input = readlineSync.questionInt(promptText);
    return input;
}

/**
 * Function use: Get a floating point number from user
 * @param {string} promptText The text to be displayed to the user on the console before input. Default is empty string "".
 */
function readFloat(promptText = '') {
    let input;
    input = readlineSync.questionFloat(promptText);
    return input;
}

/**
 * Function use: Get a string from user
 * @param {string} promptText The text to be displayed to the user on the console before input. Default is empty string "".
 * 
 */
function readLine(promptText = '') {
    return readlineSync.question(promptText);
}

/**
 * Function use: Get a number array
 * 
 * @param {string} promptText  The text to be displayed to the user on the console before input. Default is empty string "".
 * @param {object} paramObject Set options object for input.
 * @param {boolean} paramObject.reInputOnError Again ask user for input. Default is false.
 * @param {string} paramObject.separator Which type of separator to be used. The two options are 'space' or 'enter'. Default is 'space'
 * @param {number} paramObject.size The size of the array to enter. Default is 1.
 */
function readNumberArray(promptText = '', paramObject = {}) {
    let input;
    let inputArray = [];
    let reInputOnError, separator, size;

    reInputOnError = paramObject.reInputOnError ? paramObject.reInputOnError : false;
    separator = paramObject.separator ? paramObject.separator : 'space';
    size = paramObject.size ? paramObject.size : 1;

    separator = separator.toLowerCase();
    if (separator === 'enter') {
        promptText.length > 0 ? process.stdout.write(promptText) : null;
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
                    console.log('Wrong input entered, Enter Again');
                    input = readlineSync.question(promptText);
                    inputArray = input.split(' ');
                    index = -1;
                }
                else {
                    console.log('Wrong input entered');
                    process.exit();
                }
            }
        }
    }
    return inputArray.map(value => +value);
}

/**
 * Function use: Get an generic array.
 * @param {string} promptText The text to be displayed to the user on the console before input. Default is empty string "".
 * @param {object} paramObject Set options object for input.
 * @param {string} paramObject.separator Which type of separator to be used. 
 * It can be either 'space' or 'enter'. Default is "space".
 * @param {number} paramObject.size The size of the array to be entered. Default is 1.
 */
function readArray(promptText = '', paramObject = {}) {
    let input;
    let inputArray = [];
    let separator, size;
    
    separator = paramObject.separator ? paramObject.separator : 'space';
    size = paramObject.size ? paramObject.size : 1;
    
    separator = separator.toLowerCase();
    if (separator === 'enter') {
        promptText.length > 0 ? process.stdout.write(promptText) : null;
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
 * Function use: Get the true or false value entered by user on the console.
 * @param {string} promptText The text to be displayed to the user on the console before input. Default is empty string "".
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
 * Function use: Wait till user presses something
 * @param {string} [promptText=''] The text to be displayed to the user on the console before input. Default is empty string "".
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
