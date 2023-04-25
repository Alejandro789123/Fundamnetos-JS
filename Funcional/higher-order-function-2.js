//curring
function finalPreco(tax){
    return function(preco){
        return preco * (1 + tax)
    }
    
}
const myFinalPreco = finalPreco(0.75)

console.log(myFinalPreco(25.1))

/////////////////////---///////////////////////

function mult(a){
    return function(b) {
        return `Result ${a * b}`
    }
}

console.log(mult(10) (10))

/////////////////////---///////////////////////

function soma(a){
     return x = (b) => {
        return a * b
    }
}
const valorA = soma(16)

console.log(valorA(10))
