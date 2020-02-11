document.getElementById("btn-soma").addEventListener('click', function () {
    const a = document.getElementById("soma1").value; //recebe o valor de soma1 e armazena em a
    const b = document.getElementById("soma2").value; //recebe o valor de soma2 e armazena em b
    //const soma = parseInt(a) + parseInt(b); //usamos parseInt para que as string nao sejam concatenadas

    if (a == 0 || b == 0) {
        document.getElementById("resultado").value = 0;
    } else {
        document.getElementById("resultado").value = parseInt(a) + parseInt(b);
    }
})