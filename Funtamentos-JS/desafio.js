function range(a , b, c){
    let total = [];
    for(let x = 1; x <= a; x++ ) {
    total += x
    } 
    return total
}
console.log(range(5))
//OU 
function range(a , b, c){
    let total = [];
    for(let x = 1; x <= a; x++ ) {
    total.push(x)
    } 
    return total
}
console.log(range(10))

