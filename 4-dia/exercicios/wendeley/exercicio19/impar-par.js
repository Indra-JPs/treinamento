let num1 = 2;
let num2 = 2;

function calcularImparPar(n1,n2){
  if(n1 % n2 === 0){
    return "par";
  }else{
    return "impar";
  }
}

console.log(calcularImparPar(num1,num2))