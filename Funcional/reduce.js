const nums = [1,2,3,4,5,6]

const sum = (total, el) => total + el
const nums2 = nums.reduce(sum)

console.log (nums2)

const media = (total, el, i, array) => {// total e o acumulador! el seria o elemento do Array! 'i' seria o indexe do vertor com 0 a 5(posições)! Array seria o tamanho do vetor  
    if (i === array.length -1) {
        return (total + el) / array.length
    }else{
        return total + el
    }
}

console.log(nums.reduce(media))