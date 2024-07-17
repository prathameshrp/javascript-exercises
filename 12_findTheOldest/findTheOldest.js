const findTheOldest = function(people) {
    const oldest = people.sort((a, b) => {
        if(!a.yearOfDeath) a.yearOfDeath = (new Date()).getFullYear();
        if(!b.yearOfDeath) b.yearOfDeath = (new Date()).getFullYear();

       const lastGuy = a.yearOfBirth - a.yearOfDeath;
       const nextGuy = b.yearOfBirth - b.yearOfDeath;
        
       return lastGuy > nextGuy ? 1 : -1;

    })

   return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
