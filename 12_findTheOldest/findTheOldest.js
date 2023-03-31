const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const actualYear = new Date().getFullYear()

const findTheOldest = function(people) {
    const theOldest = people.reduce((oldest,person)=> {
        if(!oldest.yearOfBirth) return person;
        let actualAge = (oldest.yearOfDeath || actualYear)- oldest.yearOfBirth;
        let personAge = (person.yearOfDeath || actualYear)- person.yearOfBirth;
        if (personAge>actualAge) return person;
        else return oldest;
    },{})
    return theOldest;
};
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
