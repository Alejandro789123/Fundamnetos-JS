
//create a range function

function range(a , b, c){
    let total = [];
    for(let x = 1; x <= a; x++ ) {
    total += x
    } 
    return total
}
//range(5) -> [1, 2, 3, 4, 5]
console.log(range(5))
//OU 
function range(a , b, c = 1){
     n1 = b === undefined ? 1 : a // se b for undefined significa que n1 vai ser 1,mas, se não for undefined n1 assumira o parametro de 'a'
     n2 = b === undefined ? a : b // verifica se b e undefined  o valor de n2 sera 'a', ms, se não for undefined n2 assumira o parametro de 'b' 
    const step = n1 <= n2 ? Math.abs(c) : -Math.abs(c) // inserindo 'abs' signfica que '+' : '-' Math.abs() o laço sera negativo! 

    let total = [];
    for(let x = n1; n1 <= n2 ? x <= n2 : x >= n2; x += step) {
    total.push(x)
    } 
    return total
}
// range(5) -> [1, 2, 3, 4, 5]
console.log(range(5))

// range(6, 11) -> [6, 7, 8, 9, 10, 11,]
console.log(range(6, 11))

// range(10, 19, 2) -> [10, 12, 14, 16, 18]
console.log(range(10, 19, 2)) 

//range(6, 2) -> (6, 5. 4. 3. 2)
console.log(range(6, 2))

//range.log(range(8. -10, 2)
console.log(range(8, -10, 2))