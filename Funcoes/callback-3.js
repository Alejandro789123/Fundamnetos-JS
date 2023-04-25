//programação funcional
//programação reativa 

const nums = [1,2,3,4,5,6]

const dobro = (nums) => nums *2
const r = nums.map(dobro)
console.log(r)
console.log(nums.map(dobro))

const nomes = ['ale', 'bia', 'leo', 'alex', 'ze']

const primeiraLetra1 = text => text[0]
const letras = nomes.map(primeiraLetra1)
console.log(letras)

const primeiraLetra2 = (nomes).map (el => el[0])
console.log(primeiraLetra2) 


const carrinho = [
    {nome: 'Ale', qtde:10, preco:7.99},
    {nome: 'bia', qtde:0, preco:649.58},
    {nome: 'leo', qtde:4, preco:27.10},
    {nome: 'alex', qtde:3, preco:5.82},
    {nome: 'ze', qtde:1, preco:19.28},
]

const getNomes = (carrinho).map(item => item.nome)
console.log(getNomes)


const getCalculo = (carrinho).map(item => 
    item.qtde * item.preco
)
 console.log(getCalculo)

const getCalculo1 = item => item.qtde * item.preco
const total = carrinho.map(getCalculo1)
console.log(total)

/////////////////////------///////////////////////////////
Array.prototype.meuMap = function(fn){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray
}

const getNomess = item => item.nome
const result = carrinho.meuMap(getNomess)
console.log(result)

const getTotal = item => item.qtde * item.preco
const totais = carrinho.meuMap(getTotal)
console.log(totais)