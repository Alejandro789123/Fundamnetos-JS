// arrow function

const x = () => console.log('Alejandro')
x()

const y = (a) => `bom ${a} dia` 
console.log(y('Alejandro'))

const m = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0
    for(let x of numeros){
        total += x
    }
    return total
}

console.log(m([1,2,3,4,5,6,7]))
console.log(m(1,2,3,4,5,6,7))
console.log(m(1,2,3))

const potencial = base => exp => Math.pow(base, exp)
console.log(potencial(2)(2))

const potencial2 = base => {
    return function(exp){
        return Math.pow(base, exp)
    }
}
console.log(potencial(4)(2))

const potencial3 = base => {
    exp => {
        return Math.pow(base, exp)
    }
}
console.log(potencial(8)(2))

const potencial4 = base => {
    exp => Math.pow(base,exp)
}
console.log(potencial(10)(2))


// this 

Array.prototype.ultimo = function(){
    console.log(this[this.length -1])
}

Array.prototype.primeiro = function(){
    console.log(this[0])
}

const numeros = [1,2,3]
numeros.ultimo()
numeros.primeiro() 