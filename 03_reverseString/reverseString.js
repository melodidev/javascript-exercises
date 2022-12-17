const reverseString = function(string) {
	let reverse = "";

	for (let i = 0; i < string.length; i++) {
		reverse += string[string.length - 1 - i];
	}
	return reverse;
};

// Do not edit below this line
module.exports = reverseString;
