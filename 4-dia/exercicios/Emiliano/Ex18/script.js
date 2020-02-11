document.getElementById("clica").addEventListener('click', function () {
    const a = 5;
    const b = 2;
    
    document.getElementById("resultado").value = parseInt(a) % parseInt(b);
})