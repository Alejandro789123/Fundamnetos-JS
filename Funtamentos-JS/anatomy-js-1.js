//Function declaration

function xaxa(){ // Essa função não recebe nenhum parametro
    console.log('Alejandro') //Nãp retorna nenhum valor
}
xaxa()

function save(name){
console.log(`Hello ${name}!`) //tenplade String o valor ira substiruir o paramtro
}
save('Alejandro')
//OU
function save(nome){
    console.log('Hello ' + nome) // realiznado um concatenação
}
save('alejandro')


function returnHi(){ // Essa função não recebe nenhum parametro, mas retorna um valor!
    return 'Alejandro'
}

const x = returnHi() // vc cria um variavel para armazenar o valor e print a variavel que contem o valor! 
console .log(x + ' top 10')
//ou
console.log(returnHi() + ' estudando js ')

function returnHItO(name){// esta função recebe parametros e retorna valor!
    return ('OLA' + name) 
}

console.log(returnHItO(' mundo'))
//OU

function returnX(name){
    return `JS ${name}` 
}
console.log(returnX('funções'))