document.querySelector("#btn-random").addEventListener("click",function(event){
    const num = Number(document.querySelector("#numero"))
    const num2 = Math.floor(Math.random()*61)

    if(num == num2){
        alert("Você acertou ")
    }else{
        alert("Você errou o número certo era " + num2)
    }

})

