for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        document.querySelector("#resultado").innerHTML += `${i} x ${j} = ${i*j} <br>`;
    }
}