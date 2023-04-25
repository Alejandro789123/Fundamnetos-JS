

const sum = function(a, b){
    return a + b 
}

const suma2 = (a,b) => a + b

////////////////////-----///////////////
const sub = function(a, b){
    return a - b 
}

const sub2 = (a,b) => a - b

////////////////////-----///////////////
const mult = function(a, b){
    return a * b 
}

const mult2 = (a,b) => a * b

////////////////////-----///////////////
const div = function(a, b){
    return a / b 
}

const div2 = (a,b) => a / b

////////////////////-----///////////////

console.log(sum(10, 10)) || console.log(suma2(10,20))
console.log(sub(10, 11)) || console.log(sub2(10, 11))
console.log(mult(10, 10)) || console.log(mult2(20,20))
console.log(div(10, 2)) || console.log(div2(20, 2))
