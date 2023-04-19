 //Função anonima 
 // IIFE -função expression imediatamente invocada

 (function () {
      var x = 300
      console.log(x)  
 })();
 
 (function (a, b ,c) {
    console.log(a * b * c)
 })(10, 10, 10);

 (function (a, b ,c) {
    console.log(`result ${a * b * c}`)
 })(10, 10, 20);

 (function (a, b ,c) {
    console.log('resposta ' + (a * b *c))
 })(10, 10, 30);

 //Arrow function
 //Função anonima 

 ( (a , b , c) => {
    console.log(a *b * c)
 })(10, 20, 30);


 ( (a , b , c) => {
    console.log(` result = ${a *b * c}`)
 })(10, 20, 30);