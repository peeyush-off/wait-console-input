# wait-console-input

---
### Synchronous inputter for nodejs.

This module provides various functions that can be used to block program execution and wait for user input from console.
These functions provide input in various datatypes. 

---
#### Installation
```
npm install wait-console-input
```
---

##### All the functions available are:
  - readChar()
  - readInteger()
  - readFloat()
  - readLine()
  - readNumberArray()
  - readArray()
  - readBoolean()
  - wait()
---
##### General Use
```
const inputReader = require('wait-console-input')

let inputArray = inputReader.readNumberArray( "Enter an array", {
    reInputOnError: true,
    separator: 'enter',
    size: 5
});
console.log(inputArray);
```

Output:
```
Enter an array
1
2
3
4
5
[ 1, 2, 3, 4, 5 ]
```

##### Usage
 
###### 1. `readChar(promptText, paramObject)`
*Get a character from user*
1. `promptext` is The text to be displayed to the user on the console before input.
2. `paramObject` is an object that can have the following properties :
    - `reAskOnChars` is an array where you can list out all the characters for which the user will be asked to input again.

> Example usage
`let input = inputReader.readChar('Input a character', { reAskOnChars: ['z'] })`;

**Careful `readChar` will not exit on ctrl+c**
###### 2. `readInteger(promptText)`
*Get an integer number from user*
1. `promptext` is The text to be displayed to the user on the console before input.

> Example usage
`let input = inputReader.readInteger('Input an integer')`;
###### 3. `readFloat(promptText)`
*Get a floating point number from user*
1. `promptext` is The text to be displayed to the user on the console before input.

> Example usage
`let input = inputReader.readFloat('Input an float')`;
###### 4. `readLine(promptText)`
*Get a string from user*
1. `promptext` is The text to be displayed to the user on the console before input.

> Example usage
`let input = inputReader.readLine('Input an float')`;

###### 5. `readNumberArray(promptText, paramObject)`
*Get a number array*
1. `promptext` is The text to be displayed to the user on the console before input.
2. `paramObject` is an object that can have the following properties :
    - `reInputOnError` Ask user for input again if wrong input is entered by user. Default is `false`
    - `seperator` The seperator that will be used to seperate between the various numbers input for array. It can have the following two values **space** and **enter**. Default is `'space'`.
    - `size` This is the size of the array. This will be only used when seperator used is enter. Default value is `1`.

> Example usage
`let input = inputReader.readNumberArray('Input a number array', {reInputOnError: true, seperator: 'enter', size: 5})`;

###### 6. `readArray(promptText, paramObject)`
*Get an generic array.*
1. `promptext` is the text to be displayed to the user on the console before input.
2. `paramObject` is an object that can have the following properties :
    - `seperator` The seperator that will be used to seperate between the various numbers input for array. It can have the following two values **space** and **enter**. Default is `'space'`.
    - `size` This is the size of the array. This will be only used when seperator used is enter. Default value is `1`.

> Example usage
`let input = inputReader.readArray('Input an array', { seperator: 'enter', size: 5})`;

###### 7. `readBoolean(promptText)`
*Get the true or false value entered by user on the console.*
1. `promptext` is the text to be displayed to the user on the console before input.

> Example usage
`let input = inputReader.readBoolean('Input a boolean')`;
###### 8. `wait(promptText)`
*Wait till user presses something*
1. `promptext` is The text to be displayed to the user on the console before input.

> Example usage
`inputReader.wait('Press a button to continue')`;

**Careful `wait` will not exit on ctrl+c**
##### This module is just a wrapper around the ```readline-sync``` module.
