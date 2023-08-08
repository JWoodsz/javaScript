// initialize the counter 0
let count = 0;
let countEL = document.getElementById ("count-el");
let saveEL = document.getElementById ("save-el")

function incremrnt(){
    count++
    // console.log(`clicked ${count}`)
    countEL.textcontent = ++count
}
    function save(){
        let countStr
        countStr = `${count} - `
       // console.log(countStr)
        saveEL.textcontent += countStr
        count = 0
        countEL.textContent = count
    }
 document.addEventListener(('DOMContentLoaded',))

