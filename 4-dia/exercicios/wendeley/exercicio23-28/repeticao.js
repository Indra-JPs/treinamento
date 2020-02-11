document.querySelector("#resultado").innerHTML = "Repetição";

for(let i = 0; i < 2; i++){
  document.querySelector("#resultado2").innerHTML += `Repetição ${i+1} <br>`;
}

for(let i = 0; i < 20; i++){
  document.querySelector("#resultado3").innerHTML += `Repetição ${i+1} <br>`;
}