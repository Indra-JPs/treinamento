//Exercicio 35
const meses = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")
let d = new Date();
console.log(`${(d.getDate())}/${(d.getMonth()+1)}/${(d.getFullYear () )}`)


//Exercício 36
let mes = meses[new Date().getMonth()+ 1]
console.log(mes)