const firstName = 'Klarke'
const lastName = 'Kent'
const age = 25
const str = 'Aweh, im woodsz'
const tags = 'Web,Development,JavaScipt,front-end'

let val

//concatinate
val = firstName + ' ' + lastName

// append - add onto
val = 'Woodsz'
val += 'Woodie'

val = 'aweh, my name is ' + firstName + ' and i am ' + age

// escaping
val = "that`s coolio, i can't wait"
val = 'that\'s nice'


// length property
val = firstName.length

// concat
val = firstName.concat(' ',lastName)

// change case
val = firstName.toUpperCase()
val = firstName.toLowerCase()

val = firstName[0]

// indexOf()method
val = firstName.indexOf('e')
val = firstName.indexOf('u')

val = firstName.lastIndexOf('e')

// charAt() method
val = firstName.charAt(2)

// get last char
val = firstName.charAt(firstName.length-1)


// subsring() methhod
val = firstName.substring(0,4)

// slice()
val = firstName.slice(' ')

// split
val = str.split(' ')
val = str.split(',')

// replace
val = str.replace('Kent', 'woodsz')

// includes()
val = str.includes('aweh')