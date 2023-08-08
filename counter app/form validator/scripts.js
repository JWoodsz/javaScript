const form = document.getElementById('form')
const username = document.getElementById('username')
const email =document.getElementById('email')
const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')

// inpuut error msg
function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySeletor(small)
    small.innerText = message
}
 // console.log(input, message)
 function showSucess(input) {
    const formControl = input.parentElement
    className = 'form-control success'
 }
function isValidEmail(email)

form.addEventListener('submit',function(e){
    console.log('submit')
    e.preventDefault()
    console.log(username.value)

    if(username.value === ''){
        showEror('username is required')
    } else {
        showSuccess(username)
    }
    if(email.value === '') {
        showError()
    }
})

