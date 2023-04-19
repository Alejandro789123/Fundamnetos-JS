//Função anonima
(function (a, b, c){
    return a + b +c
})

//Function expression atribiu um função anonima a uma variavel ou constante
 var sum = function (a ,b , c){
    return a* b * c 
}
 console.log(`Resultado ${sum (10, 20, 10)}`)
//OU
const resultado = sum (10, 5, 10)
console.log('resultado da multiplicação = ' + resultado)
//OU
const result = sum
console.log(result(20, 10, 30))
//OU

let x = sum
console.log(`nota ${x(20, 25,40)}`)

//------------------------------------------------------------------------------------------------------

function soma (a, b, c ){
    return a + b +c
}

console.log(soma(12, 14, 16))