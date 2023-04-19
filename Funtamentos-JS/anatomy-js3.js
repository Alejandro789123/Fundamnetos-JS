// function expression
const increment1 = function(n){
    return n + 1
}

console.log(increment1(16))


//Arrow function e sempre anonima
const increment2 = (n) => {
    return n + 1
}

const increment3 = n => {
    return n + 1
}

const increment4 = n => n +1

const increment5 = (a, b) => a * b 

const increment6 = (a, b ,c) => {
    return ('Resposta ' + '= ' + a * b *c)
}

console.log(increment2(10))
console.log(increment3(20))
console.log(increment4(30))
console.log(increment5(10, 10))
console.log(increment6(10, 10, 10))