const estudantes =[
    {nome: 'alejandro', nota: 8.4},
    {nome: 'leonardo', nota: 7.6},
    {nome: 'Elias', nota: 4.9},
    {nome: 'Pedro', nota: 9.4},
    {nome: 'Alex', nota: 9.7}
]

const notaEstudantes = ((el) => el.nota >=9)
const getNotas2 = ((el) => el.nota)
const media = (total, el, i, array) => {// total e o acumulador! el seria o elemento do Array! 'i' seria o indexe do vertor com 0 a 5(posições)! Array seria o tamanho do vetor  
    if (i === array.length -1) {
        return (total + el) / array.length
    }else{
        return total + el
    }
}

console.log(
    estudantes
    .filter(notaEstudantes)
    .map(getNotas2)
    .reduce(media)
)