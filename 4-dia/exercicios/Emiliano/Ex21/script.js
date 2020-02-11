document.getElementById("clica").addEventListener('click', function () {
    const a = document.getElementById("val").value;
    document.getElementById('resultado').value = parseInt(a)-(parseInt(a)*0.05);
})