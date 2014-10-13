module.exports = function emphasise(string, bangCount = string.length) {
	return `${string}${'!'.repeat(bangCount)}`
}