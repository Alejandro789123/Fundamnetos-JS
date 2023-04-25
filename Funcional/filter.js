const nums = [1,2,3,4,5,6]

const nums2 = nums.filter((el) => el >0)
const nums3 = nums.filter((el) => el > 10)
const nums4 = nums.filter((el) => el % 2 === 0 )
const nums5 = nums.filter(function(elm){
    return elm % 3 === 0 
}) 
console.log(nums2, nums3, nums4, nums5)

const estudantes =[
    {nome: 'alejandro', nota: 8.4},
    {nome: 'leonardo', nota: 7.6},
    {nome: 'Elias', nota: 4.9},
    {nome: 'Pedro', nota: 9.4},
    {nome: 'Alex', nota: 9.7}
]

const notaEstudantes = estudantes.filter((el) => el.nota >=9)
const notaEstudantes2 = el => el.nota >=9
console.log(estudantes.filter(notaEstudantes2) ,notaEstudantes)