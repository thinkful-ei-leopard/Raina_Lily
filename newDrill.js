'use strict';

function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0;
    return function (location){
        warningCounter += 1;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    };
}

const rocksWarning = hazardWarningCreator('Rock on the Road');
const hurricaneWarning = hazardWarningCreator('Hurricane is coming');
const earthquakeWarning = hazardWarningCreator('Earthquake is coming');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
hurricaneWarning('Florida');
earthquakeWarning('California');
