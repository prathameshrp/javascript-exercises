/*
    - year divisible by 4 is leap year
    - year divisible by 100 is not leap year
    - but if it's divisible by 400 then its leap year
 */

const leapYears = function(year) {
    // if(year%400 === 0) return true;
    // else if(year%4 === 0 && year%100 !== 0) return true;

    // return false;

    //the elegant way -

    if(year%4 === 0 && (!(year%100 === 0) || year%400 === 0)) return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
