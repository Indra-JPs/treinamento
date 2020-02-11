//Exercício  19
function calcularImparPar(n1,n2){
    if(n1 % n2 === 0){
      return "par";
    }else{
      return "impar";
    }
  }

// Exercício 20
function multiplicacao(n1, n2){
    return n1*n2;
  }

// Exercício 21
function desconto(valor){
    return ((valor/100)*5);
  }

//Exercício 22
function calcularIdade(ano){
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - ano;   
    if(idade >=18){
      return("Maior de Idade")
    }else{
      return("Menor de Idade");
    }
}  
 
let num1 = 1 ;
let num2 = 2 ;
let valor = 100 ;
let dataNascimento = 1994;


console.log(calcularImparPar(num1,num2));
console.log(multiplicacao(num1,num2));
console.log(`Desconto ${desconto(valor)}`);
console.log(calcularIdade(dataNascimento));

