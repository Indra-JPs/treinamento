document.querySelector("#btn-elemento").addEventListener("click", function(){
    const elementos = [];
    elementos.push(document.querySelector("#elemento").value);
    elementos.map((elemento) =>{
        document.querySelector("#elementos").innerHTML += `<li>${elemento}</li>`;
        console.log(elementos.length);
    })
})