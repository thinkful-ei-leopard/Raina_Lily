'use strict';

//Jedi name

function jediName(firstName, lastName) {
    console.log(`${firstName.slice(0, 3)}${lastName.slice(0, 2)}`);
}

jediName("Lily", "Burnside"); 

//To infinity...

function beyond(num){
    if (!isFinite(num)){
        console.log('And beyond');
    }
    if (isFinite(num) && num > 0){
        console.log('To infinity');
    }
    if (isFinite(num) && num < 0){
        console.log('To negative infinity');
    }
    if (num === 0){
        console.log('Staying home');
    }
}

//cracking the code

function decode(word){
    if (word[0] === 'a'){
        return word[1];
    }
    if(word[0] === 'b'){
        return word[2];
    }
    if(word [0] === 'c'){
        return word[3];
    }
    if(word [0] === 'd'){
        return word[4];
    }
    else{
        return ' ';
    }
}

//How many days in a month

function days(month){
    switch (month) {
        case 'January':
            console.log('January has 31 days');
            break;
        case 'Feburary':
            console.log('Feburary has 29 days');
            break;
        case 'March':
            console.log('March has 31 days');
            break;
        case 'April':
            console.log('April has 30 days');
            break;
        case 'May':
            console.log('May has 31 days');
            break;
        case 'June':
            console.log('June has 30 days');
            break;
        case 'July':
            console.log('July has 31 days');
            break;
        case 'August':
            console.log('August has 31 days');
            break;
        case 'September':
            console.log('September has 30 days');
            break;
        case 'October':
            console.log('October has 31 days');
            break;
        case 'November':
            console.log('November has 30 days');
            break;
        case 'December':
            console.log('December has 31 days');
            break;
        default: 
        throw 'Must provide a valid month.';
    }
}

//Rock Paper Scissors

function rps(num){
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if (num === randomNo){
        console.log("Tie!");
    }
    else if (num === 1 && randomNo === 2){
        console.log("You lose!");
    }
    else if (num === 1 && randomNo === 3){
        console.log("You win!");
    }
    else if (num === 2 && randomNo === 1){
        console.log("You win!");
    }
    else if (num === 2 && randomNo === 3){
        console.log("You lose!");
    }
    else if (num === 3 && randomNo === 1){
        console.log("You lose!");
    }
    else if (num === 3 && randomNo === 2){
        console.log("You win!");
    }
    else {
        throw 'Enter number 1-3';
    }
}