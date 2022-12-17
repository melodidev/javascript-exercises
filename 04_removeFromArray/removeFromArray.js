const removeFromArray = function(array, ...elements) {
	for (let element of elements) {
		let index = array.findIndex((el) => el === element);
    	if (index == -1) {
        continue;
      }
		array.splice(index, 1);
	}
  return array;
}

// Do not edit below this line
module.exports = removeFromArray;