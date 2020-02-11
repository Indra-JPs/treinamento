var array = []
document.getElementById('clica').addEventListener("click", function(){
    let texto = document.getElementById("texto").value;
    array.push(texto);
    console.log(texto);
    document.getElementById('nome').value = document.getElementById('texto').value;
})