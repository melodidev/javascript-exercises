const getTheTitles = function(array) {
	let titleArray = [];
	for (let i = 0; i < array.length; i++) {
		titleArray.push(array[i].title);
	}
	return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
