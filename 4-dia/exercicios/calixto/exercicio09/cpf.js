const cpf = document.querySelector("#cpf");

cpf.addEventListener("blur", function(){
   
   if(cpf.value) cpf.value = cpf.value.replace(/-/g, "").split(".").join("");
})
