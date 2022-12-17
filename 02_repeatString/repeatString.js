const repeatString = function(string, repeat) {
	if (!Number.isInteger(repeat) || repeat < 0) {
		return "ERROR";
	}

	let array = [];
	for (let i = 0; i < repeat; i++) {
		array.push(string);
	}
	return array.join("");
}

// Do not edit below this line
module.exports = repeatString;
