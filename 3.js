var inputs = process.argv.slice(2)

var mapCB = (currentVal, index, array) => currentVal[0]
var result = inputs.map (mapCB)

var reduceCB = (previousVal, currentVal, index, array) => `${previousVal}${currentVal}`
var output = result.reduce (reduceCB)

console.log(`[${inputs}] becomes "${output}"`)