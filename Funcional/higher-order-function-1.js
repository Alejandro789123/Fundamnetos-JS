
function run(x){
    return `resultado ${x()}`
}

function sum(a = 10, b = 10){
    console.log(`result = ${a * b}`)
}

run(sum)

run(function(a = 20, b = 30){
    console.log(a *b)
})

const result= run (increment = (a =10, b = 10) => a * b) 
console.log(result) 

run (function(a =20, b = 10) {console.log( a * b)})

const x = run(Math.random)
console.log(x)

