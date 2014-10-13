var reduceCB = (previousVal, currentVal, index, array) => previousVal += currentVal

module.exports = function average(...nums) {
	return nums.reduce(reduceCB) / nums.length
};