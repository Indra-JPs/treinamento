document.getElementById("clica").addEventListener('click', function () {
    const a = parseInt(document.getElementById("idade").value);
    const data = new Date;
    const idade = parseInt(data.getFullYear()) - a;
    if (idade >= 18){
        document.getElementById('resultado').value = ("Maior de idade")
    }else{
        document.getElementById('resultado').value = ("Menor de idade")
    }
})