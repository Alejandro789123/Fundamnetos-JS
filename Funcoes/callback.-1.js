function exec(fn, a, b) {
    return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (v, b) => console.log(v - b)

exec(somarNoTerminal, 10, 10)
exec(subtrairNoTerminal, 10, 5 )

const subtrair = (w, z) => w - z

const r = exec(subtrair, 50, 40)
console.log(r)

const fn = () => console.log('alejandro')
setInterval(fn,1000)

setInterval( () => console.log('alejandro'),1000)

setInterval (function(){
    return console.log('Alejandro')
}, 1000)