// switches - validate conditions
const color = 'pink'
switch(color){
    case 'pink':
        console.log('color is red')
        break
    case 'purple':
        console.log('color is purple')
        break
    default:
        console.log('color is not pink or purple')
}

let day

switch(new Date().getDay()){
  
    case 0:
        day = 'sunday'
        break;
    case 1:
        day = 'monday'
        break;
    case 2:
        day = 'tuesday'
        break;
    case 3:
         day = 'wednesday'
         break;
    case 4:
         day = 'thursday'
         break;
    case 5:
        day = 'friday'
        break;
    case 6:
        day = 'saturday'
        break;
}
console.log(`today is ${day}`)