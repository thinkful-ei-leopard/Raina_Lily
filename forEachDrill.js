'use strict';

let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

let filterResult = turtleSteps.filter(steps => steps[0] >= 0 && steps[1] >= 0);
filterResult.forEach(step => console.log(step)); 

let mapResult = turtleSteps.map(steps => steps[0] + steps[1]);
console.log(mapResult);


mapResult.forEach((step, index) => console.log(`Movement #${index + 1}: ${step} steps`));
