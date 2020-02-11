document.querySelector("#btn-enviar").addEventListener("click", function(){
  const nome = document.querySelector("#nome").value;
  const sobrenome = document.querySelector("#sobrenome").value;
  alert(
    `Olá ${nome} ${sobrenome}!`
  )
})