//busca o elemento (através do id) que será manipulado
const lampada = document.getElementById('lampOn');

const botao = document.getElementById('clica');

//pega o botao pelo id e adiciona o evento click
//se a lampada estiver ligada, ao clicar carrega lampada desligada e botaoOff
//se nao, carrega lampada ligada e botaoOn
document.getElementById('clica').addEventListener('click', function() {
    if (lampada.src.match("lampada-on")) {
        lampada.src="https://www.devfuria.com.br/javascript/code-lampada/lampada-off.gif";
        botao.src="botaoOff.png"
    }else{
        lampada.src="https://www.devfuria.com.br/javascript/code-lampada/lampada-on.gif";
        botao.src="botaoOn.png"        
    }
});

//pega o botao pelo id e adiciona o evento click
//se mouse tiver sobre a lampada e ela estiver ligada, carregamos a lampada desligada e botaoOff
//se nao, carregamos lampada ligada e botaoOn
document.getElementById('lampOn').addEventListener('mouseover', function(){
    if (lampada.src.match("lampada-on")) {
        lampada.src="https://www.devfuria.com.br/javascript/code-lampada/lampada-off.gif";
        botao.src="botaoOff.png"
    }else{
        lampada.src="https://www.devfuria.com.br/javascript/code-lampada/lampada-on.gif";
        botao.src="botaoOn.png"        
    }
});

document.getElementById('saudacao').addEventListener('click', function(){
    alert('Olá ' + nome.value + " " + sobrenome.value)
})