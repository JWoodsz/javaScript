// TYPE CONVERSION
let val

// number to string
val = 3
val = String(5)
val = String(4+4)

// bool to string
val = String(true)
// date to string
val = String(new Date())
// array to string
val = string([1,2,3])

//toString() method
val = (5).toString()
val = (true).toString()

// String to number
val = '5'
val = Number(val)
val = Number(true) //true = 1 / false = 0
val = Number(null) //null = 0
val = Number('Aweh') // not a number NaN
val = parsefloat('1000.30')

// output
console.log(val.toFixed()) // allows to specify decimal - only works on numbers

console.log(val)
console.log(typeof val)

// TYPE COHERSION
const val1 = String(5)
const val2 = 6
const sum = Number(val1 + val2)

console.log(sum) // when string and number will just concatinate
console.log(typeof sum)