const div = document.querySelector("#resultado");

//Exercício 23
div.innerHTML = 'Repetição';

//Exercício 24
for (let i = 0; i < 2; i++) {
    
    div.innerHTML += 'Repetição <br>';
}

//Exercício 25
for (let i = 0; i < 20; i++) {
    
    div.innerHTML += 'Repetição <br>';
}

//Exercício 26
//Exercício 27 
let i =0;
while ( i < 5) {
    div.innerHTML += 'Repetição <br>';
    i++
  }
 //Exercício 28 
var j = 0;
do {
   j += 1;
   div.innerHTML += 'Repetição <br>';
} while (j < 5)