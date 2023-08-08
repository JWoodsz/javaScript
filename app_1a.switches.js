// FUNCTION DECLARATION
function greet(){
    return 'holla'
}
console.log(greet())

function greet2(firstname, lastname){
    return 'hola ' + firstname + ' ' + lastname
}
console.log(greet2('Woodsz', 'pc'))

// FUNCTION EXPRESSIONS
const square = function(x=0) {
    return x*x
}
console.log(square(4))

// IMMEDIETLY INVOKEABLE FUNCTION EXPRESSIONS - IIFEs - fuuntion u declaire and run at the same time
// expression by putting it between parentheis

// property method
// when a funcion is put inside an object it is called a method

const todo = {
    add: function(){
        console.log('add todo...')
    },
    edit: function(id){
        console.log('edit todo ' + id)
    }
}

todo.add()
todo.add(23)
todo.delete()