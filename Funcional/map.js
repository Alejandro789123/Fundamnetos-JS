const nums = [1,2,3,4,5,6]

const nums2 = nums.map((el) => el * 2)

const nums3 = nums.map(function(elm){
    return elm * 3
}) 

const nums4 = []
for(let x of nums){
    nums4.push(x * 4)
}

console.log(nums, nums2, nums3, nums4)

////////////////////-----/////////////////////////////////////////////////

const estudantes =[
    {nome: 'alejandro', nota: 8.4},
    {nome: 'leonardo', nota: 7.6},
    {nome: 'xaxa', nota: 4.9},
]

const getNotas = (el) => el.nota
console.log(estudantes
    .map(getNotas)
    .map(Math.ceil) // ceil que earredonda para cima
)

//OU
const getNotas2 = estudantes.map((el) => el.nota)
console.log(getNotas2
    .map(Math.floor) // floor que earredonda para baixo
)

const getNotas3 = function(el) {
     return el.nota
}
const result = estudantes
            .map(getNotas3).map(Math.floor) 
            const res = estudantes
            .map(getNotas3).map(Math.ceil)
console.log(estudantes, result, res)


////////////////////-----/////////////////////////////////////////////////