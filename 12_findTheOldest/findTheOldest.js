function getAge(person) {
    age = 0
    if (!person.yearOfDeath) {
        age = new Date().getFullYear() - person.yearOfBirth
    } else {
        age = person.yearOfDeath - person.yearOfBirth
    }
    return age;
}

const findTheOldest = function(arr) {
    let oldestPerson = arr[0];
    for (let key in arr) {
        age = getAge(arr[key])
        if (age > getAge(oldestPerson)) {
            oldestPerson = arr[key]
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
