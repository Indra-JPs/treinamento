document.querySelector("#btn-fruta").addEventListener("click", function () {
    frutas = [];
    frutas.push(document.querySelector("#fruta").value);
    frutas.map((fruta) =>{
        document.querySelector("#frutas").innerHTML += `<li>${fruta}</li>`
    })
})