function logParams(a, b, c){
    console.log(a, b, c)
}
logParams(1)
logParams(1, 2)
logParams(1, 2, 3)

function logParams2(a = c, b = a, c = b){
    console.log(a +  b + c)
}

logParams2(1, 3)


function sumAll(...nums){
    let total = 0;
    for(let x of nums) {
      total += x 
    } 
    return total
}
console.log(sumAll(1, 2, 3))
