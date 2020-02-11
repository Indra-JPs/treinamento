//1º e 2º Questão
function olaMundo() {
    alert("Olá Mundo.");
}
olaMundo();

//3º
function soma(x,y){
     alert(x + y);
}
soma(2,2);

//4º
document.getElementById("btn").addEventListener('click',
function mostrarNome() {
        let nome = document.getElementById("nome").value;
        alert(nome);
    });

//5º
document.getElementById("btn").addEventListener('click',
function contar() {
    let nome = document.getElementById("nome").value;
    alert(nome.length);
});

//6º

document.getElementById("lampada").addEventListener('mouseover', 
function acender(){
    document.getElementById("lampada").src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';
});

document.getElementById("lampada").addEventListener('mouseleave', 
function apagar(){
    document.getElementById("lampada").src = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true';
});

//7º
document.getElementById("btn").addEventListener('click',
    function saudacoes() {
        const nome = document.getElementById("nome").value;
        const sobrenome = document.getElementById("sobrenome").value;
        window.document.write(nome);
        //alert("Olá " + nome + " " + sobrenome);
    });

//8º
document.getElementById("cpf").addEventListener('keyup',
    function () {
        let cpf = document.getElementById('cpf').value;
        document.getElementById('resultado').value = cpf.slice(0,3) + "."
            + cpf.slice(3,6) + "." + cpf.slice(6,9) + "-" + cpf.slice(9,);
    });


//9º
document.getElementById("cpf").addEventListener('keyup',
    function(){
        let cpf = document.getElementById('cpf').value;
        document.getElementById('resultado').value = cpf.slice(0,3) +
        cpf.slice(4,7) + cpf.slice(8,11) + cpf.slice(12,);
    })

//10º e 16º
document.getElementById("btn-soma").addEventListener('click',
    function () {
        document.getElementById('resultado-soma').value = parseInt(document.getElementById('soma1').value) + 
        parseInt(document.getElementById('soma2').value)
});

//12º

document.getElementById("verde").addEventListener('click',
function(){
    document.getElementById("dcolor").style.backgroundColor = "green";
});

document.getElementById("vermelho").addEventListener('click',
function(){
    document.getElementById("dcolor").style.backgroundColor = "red";
});

//14º
window.onload = window.document.write("Esse texto foi inserido pelo JavaScript...");

//15º
document.getElementById("btn").addEventListener('click',
    function () {   
        window.document.write("Esse texto foi inserido pelo JavaScript...");
    });

//17º
document.getElementById('btn').addEventListener('click',
function(){
    let n1 = document.getElementById('n1').value
    let n2 = document.getElementById('n2').value

    if(n1 == 0|| n2 == 0){
        document.getElementById('resultado').value = 0;
    } else {
        document.getElementById('resultado').value = parseInt(n1) + parseInt(n2);
    }
});

//18º
alert(5%2);

//19º
document.getElementById("btn").addEventListener('click',
function(){
    let n1 = document.getElementById('n1').value;
    if(n1%2 == 1 || n1%0 == 1){
        alert(n1 + " é Impar")
    }else{
        alert(n1 + " é Par")
    }
});

//20º
document.getElementById("btn").addEventListener('click',
function(){
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    document.getElementById("resultado").value = n1 * n2;
});

//21º
document.getElementById("btn").addEventListener('click',
function(){
    const n1 = parseFloat(document.getElementById('n1').value)
    document.getElementById('resultado').value = (n1 - ((n1 * 5)/100)).toFixed(2);
});

//22º
document.getElementById("btn").addEventListener('click',
    function () {
        const n1 = parseInt(document.getElementById("n1").value);
        const data = new Date();
        const idade = parseInt(data.getFullYear()) - n1;

        if(idade >= 18){
            alert('Maior de Idade');
        } else{
            alert('Menor de Idade');
        }
    });

//23º
document.getElementById('resultado').innerHTML = 'Repetição';

//24º
const el = document.getElementById('resultado');
el.innerText = 'Repetição';
el.innerText = el.innerText + ' Repetição';

//25º
const el = document.getElementById('resultado');

for (let index = 0; index < 20; index++) {
    el.innerText = el.innerText +" "+ (index + 1) + ' - Repetição';
}

//26º
const el = document.getElementById('resultado');

const nomes = ['Repetição', 'Repetição', 'Repetição', 'Repetição', 'Repetição']

nomes.forEach(v => {
    el.innerHTML = el.innerHTML + " " + v;
});

//27º e 28º
const el = document.getElementById('resultado');

let x = 0
while (x < 5) {
    el.innerHTML = el.innerHTML + " " + ("Repetição");
    x++;
}

//29º
const el = document.getElementById('resultado');
for (let x = 0; x <= 10; x++) {
    el.innerHTML = el.innerHTML + " " + x;
    
};

//30º
const el = document.getElementById('resultado');
for (let x = 0; x <= 20; x++) {
    if(x%2 == 0 || x%0 == 0) {
        el.innerHTML = el.innerHTML + " " + x;
    }
};

//31º
for (let x = 0; x <=10; x++) {
    for (let y = 0; y <=10; y++) {
        window.document.write(x + " x " + y + " = " + x*y +"<br>");
    }
    window.document.write("<br>");
};

//32º
document.getElementById('btn').addEventListener('click',
function(){
    const texto = document.getElementById('texto').value;
    if(texto.includes('Dota')){
        alert('O texto contém a palavra Dota');
    } else{
        alert('O texto não contém a palavra Dota');
    }
});

//33º
alert(Math.floor(Math.random()*10));

//34º
document.getElementById('btn').addEventListener('click',
function(){
    const valor = document.getElementById('valor').value;
    if(valor == Math.floor(Math.random()*10)){
        alert('Você acertou o número');
    }else{
        alert('Você errou o número');
    };
});

//35º
let data = new Date();
alert(data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear());

//36º
let data = new Date();
alert('O próximo mês é o mês ' + (data.getMonth()+2));

//37º a
var deuses = ['Aegir', 'Aud', 'Balder'];
alert(deuses.length)

//37º b
var deuses = ['Aegir', 'Aud', 'Balder'];
for (let x = 0; x < deuses.length; x++) {
    alert(deuses[x]);
};

//37º c
var deuses = ['Aegir', 'Aud', 'Balder'];
deuses.map(imprimir);
function imprimir(item){
    alert(item);
};

//37º e
var deuses = ['Aegir', 'Aud', 'Balder'];
deuses.push('Loki', 'Odin', 'Frey');
deuses.map(imprimir);
function imprimir(item){
    alert(item);
};

//37º f
???

//37º g
var numbers = [5, 7, 1, 8, 9];
window.document.write(numbers.sort());

//37º h
var numbers = [5, 7, 1, 8, 9];
window.document.write(numbers.reverse(numbers.sort()));

//38º
var deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr'];
let d = document.getElementById('nomes');
for (let x = 0; x < deuses.length; x++) {
    d.innerHTML = d.innerHTML + "<br>" + deuses[x];
};

//39º
var nome = [];
let d = document.getElementById('nomes');
document.getElementById('btn').addEventListener('click',
function(){
    nome.push(document.getElementById('nome').value);
    d.innerHTML = nome;
});

//40º
var numeros = [];
let d = document.getElementById('pares');
document.getElementById('btn').addEventListener('click',
    function () {
        const n = document.getElementById('numero').value;
        if (n % 0 == 0 || n % 2 == 0) {
            numeros.push(n);
            d.innerHTML = numeros;
        }
    });
*/
