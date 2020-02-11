document.querySelector("#cpf").addEventListener("keyup", function(){

  //Formatando o CPF com expressões regulares
  let cpf = document.querySelector("#cpf").value
  .replace(/[^0-9]/g, "")
  .replace(/^([\d]{3})([\d]{3})?([\d]{3})?([\d]{2})?/, "$1.$2.$3-$4")
  
  document.querySelector("#cpf-pontos").innerHTML = cpf;
})