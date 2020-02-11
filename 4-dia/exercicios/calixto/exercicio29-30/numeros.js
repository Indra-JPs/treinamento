const div29 = document.querySelector("#resultado29");
const div30 = document.querySelector("#resultado30");


for (let i = 1; i <= 10; i++) {
    
    div29.innerHTML += i + '<br>';
}

function pares(num){
    if (num % 2 === 0){
        return true
    }
}

for (let i = 0; i <= 20; i++) {
    if (pares(i)){
        div30.innerHTML += i + '<br>';
    }
    
}