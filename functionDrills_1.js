'use strict';

function getYearOfBirth(age){
    return 2020 - age;
  }

  function createGreeting(name, age) {
      if (age < 0) {
          throw new Error("Age cannot be negative");  
      }

      if (!age || !name) {
          throw new Error('Arguments not valid');
      }
      if (typeof age !== 'number')  {
          throw new Error('Arguments not valid');
      }
      if (typeof name !== 'string') {
      throw new Error('Arguments not valid');
      }
      const Birth = 2020 - age; 
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${Birth}`;
}

try {
    const greeting1 = createGreeting('Raina', 24);
    console.log(greeting1);
} catch(e) {
    console.error(e.message);
}