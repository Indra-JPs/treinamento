document.getElementById("clica").addEventListener('click', function () {
    const a = document.getElementById("n1").value; //recebe o valor de soma1 e armazena em a
    const b = document.getElementById("n2").value; //recebe o valor de soma2 e armazena em b
    //const soma = parseInt(a) + parseInt(b); //usamos parseInt para que as string nao sejam concatenadas
    document.getElementById('resultado').value = parseInt(a)*parseInt(b);
})