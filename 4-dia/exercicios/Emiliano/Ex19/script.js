document.getElementById("clica").addEventListener('click', function () {
    
    if (document.getElementById('inteiro').value%2==0){
        document.getElementById("resultado").value = ("Par");
    }else{
        document.getElementById("resultado").value = ("Ímpar");
    }

})