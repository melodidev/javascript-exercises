function checkIfPositiveInt(...inputs) {
	for (let input of inputs) {
		if (!(Number.isInteger(input)) || input < 0) {
			return false;
		}
	}
	return true;
}

const sumAll = function(start, end) {
	if (!checkIfPositiveInt(start, end)) {
		return "ERROR";
	}

	// Switch places if start is greater
	if (start > end) {
		let tmp = end;
		end = start;
		start = tmp;
	}

	let num = 0;
	for (let i = start; i <= end; i++) {
		num += i;
	}
	return num;
}

// Do not edit below this line
module.exports = sumAll;
