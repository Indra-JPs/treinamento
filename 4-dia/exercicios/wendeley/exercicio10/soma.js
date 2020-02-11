document.querySelector("#btn-somar").addEventListener("click", function(){

  function somar(n1, n2){
    return (Number(n1) + Number(n2));
  }

  let numero1 = document.querySelector("#numero1").value;
  let numero2 = document.querySelector("#numero2").value;
  let resultado = somar(numero1, numero2)
  
  document.querySelector("#resultado").value = resultado;
})