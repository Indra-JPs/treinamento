let anoNascimento = 1993;

function calcularIdade(ano){
     let anoAtual = new Date().getFullYear();
     return anoAtual - anoNascimento;  
}

if(calcularIdade(anoNascimento) >=18){
  console.log("Maior de Idade")
}else{
  console.log("Menor de Idade");
}