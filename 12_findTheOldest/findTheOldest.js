const findTheOldest = function(array) {
	let oldestPerson = null;
	let oldestAge = null;
	let age = null;
	let person = null;

	for (let i = 0; i < array.length; i++) {
		person = array[i];
		
		let yearOfDeath = (!person.yearOfDeath) ? new Date().getFullYear() : person.yearOfDeath;

		age = yearOfDeath - person.yearOfBirth;
		if (age > oldestAge) {
			oldestPerson = person;
			oldestAge = age;
		}
	}
	return oldestPerson.name;
};

// Do not edit below this line
module.exports = findTheOldest;
