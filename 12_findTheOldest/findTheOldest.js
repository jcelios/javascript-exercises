const findTheOldest = function (people) {
  function age(person) {
    if ("yearOfDeath" in person) return person.yearOfDeath - person.yearOfBirth;
    else {
      let year = new Date().getFullYear();
      return year - person.yearOfBirth;
    }
  }

  let ages = [age(people[0]), age(people[1]), age(people[2])];

  let maxAge = Math.max(ages[0], ages[1], ages[2]);

  return people[ages.indexOf(maxAge)];
};

// Do not edit below this line
module.exports = findTheOldest;
