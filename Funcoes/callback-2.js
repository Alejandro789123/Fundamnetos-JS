const fs = require('fs') //leitura do arqquivo 
const path = require('path') //caminho do arquivo

const caminho = path.join(__dirname, 'dados.txt')//armazena numa const o caminho e os dados dele mesmo. 

function exibirConteudo(_, conteudo){
  console.log(conteudo.toString())//função traz  os dados textuais do arquivo por parametros ultilizando toString
}

 fs.readFile(caminho,{}, exibirConteudo) // exibi o que esta no arquivo 

console.log('Inicio...')
fs.readFile(caminho, (_, conteudo) => //Função Arrow  
 console.log(conteudo.toString()))
 console.log('Fim...')

 console.log('Inicio...')
 const conteudo = fs.readFileSync(caminho) // print com uma const
 console.log(conteudo.toString())
 console.log('Fim...')