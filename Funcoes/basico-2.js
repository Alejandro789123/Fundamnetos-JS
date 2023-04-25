function soam1(a){
    return function(b){
        return function(c){
            return a * b * c 
        }
    }
}

const resultado = soam1(10) (20)
console.log(resultado(30))

function soma (a, b, c){
    return a + b + c 
}
const result = soma(4, 6, 5)
console.log(result)
////////////////////////---///////////////////////
const x = (a) => {
    return function(b){
        return a * b
    }
} 
const resp = x(10)
console.log(resp(5))
console.log(x(5)(5))


function calcular(x){
    return function(y){
        return function (fn){
            return fn(x, y)
        }
    }
}

function soma(a, b){
    return a + b
}

function subtrair(a, b){
    return a - b
}

function mul (a, b){
    return a * b
}

function div (a, b){
    return a / b
}

 const r1 = (calcular(10)(5)(soma))
 const r2 = (calcular(10)(5)(subtrair))
 const r3 = (calcular(10)(5)(mul))
 const r4 = (calcular(10)(5)(div))
 console.log(r1, r2, r3, r4)