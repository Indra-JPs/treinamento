document.querySelector("#btn-numero").addEventListener("click", function(){
    let numero = Number(document.querySelector("#numero").value);
    let aleatorio = Math.floor(Math.random()*2);
    console.log(aleatorio);
    if(numero === aleatorio){
        alert("Você acertou!");
    }else{
        alert("Você errou!");
    }
})