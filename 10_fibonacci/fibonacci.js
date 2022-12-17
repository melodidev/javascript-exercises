const fibonacci = function(num) {
	if (num < 0) {
		return "ERROR";
	} else if (num == 0) {
		return 0;
	}

	let previous = 1;
	let current = 1;
	let tmp = 1;

	for (let i = 0; i < num; i++) {
		tmp = current;
		current += previous;
		previous = tmp;
	}
	return previous;
};

// Do not edit below this line
module.exports = fibonacci;
