document.querySelector("#cpf").addEventListener("keyup", function(){
    let cpf = document.querySelector("#cpf").value;
    cpf.replace("/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/", "$1.$2.$3-$4")
    document.querySelector("#cpfComPonto").innerHTML = cpf;
})