'use strict';

function getYearOfBirth(age){
    return 2020 - age;
  }

  function yearOfBirth(age) {
      if (age < 0) {
          throw new Error("Age cannot be negative");
      return age;   
      }
  }
  function createGreeting(name, age) {
    const Birth = 2020 - age; 
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${Birth}`;
}

try {
    const greeting1 = createGreeting('Raina', 24);
    console.log(greeting1);
} catch(e) {
    console.error(e.message);
}