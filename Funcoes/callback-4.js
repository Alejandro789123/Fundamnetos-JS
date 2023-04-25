const carrinho = [
    {nome: 'Ale', qtde:10, preco:7.99},
    {nome: 'bia', qtde:0, preco:649.58},
    {nome: 'leo', qtde:4, preco:27.10},
    {nome: 'alex', qtde:3, preco:5.82},
    {nome: 'ze', qtde:1, preco:19.28},
]

const nome = item => item.nome
const qtdeMaiorDoQueZero = item => item.qtde >0

const resultado = carrinho
    .filter(qtdeMaiorDoQueZero)
    .map(nome)
console.log(resultado)

Array.prototype.meuFilter = function(fn){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        if(fn(this[i], i, this)){
        novoArray.push(this[i])
        }
    }
    return novoArray
}

const resultado2 = carrinho
    .meuFilter(qtdeMaiorDoQueZero)
    .map(nome)
console.log(resultado2)