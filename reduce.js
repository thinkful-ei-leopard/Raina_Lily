'use strict';

let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

let inputArr = input.split(' ');

let reducer = (accumulator, initialValue) => accumulator + initialValue;

function myFunct(inputArr){
  let newArr = [];
  for (let i = 0; i <= inputArr.length; i++){
    if (inputArr[i].length === 3){
      let space = inputArr[i] + ' ';
      newArr.push(`${space}`);
      return newArr;
      //gave error ".push is not a function"
      //we were trying to put a space at the end of the word and pushing it into the array
    }
    else {
      let lastCharacter = inputArr[i].length-1;
      inputArr[i] = inputArr[i].substring(0, lastCharacter) + inputArr[i].substr(lastCharacter).toUpperCase();
      newArr = inputArr[i];
      //trying to find the lastcharacter then capitalizing it and then adding to the array
    }
  }
}

console.log(myFunct(inputArr));

console.log(newArr.reduce(reducer));