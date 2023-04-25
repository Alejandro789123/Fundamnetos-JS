const nome = 'alejandro'
console.log(nome)

//Function declaration
function x(){
    console.log('Boa tarde')
}
x()

//Function expression 
const boaNoite = function(){
    console.log('Boa noite'
    )
}
boaNoite()

let a = boaNoite() // undefined
console.log(a)

const result = function soma(a = 0, b =0){
    return a + b
}

console.log(result(5, 10))
console.log(result(5, 11, 14))