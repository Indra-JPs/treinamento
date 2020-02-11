document.getElementById('clica').addEventListener('click', function load(){
    document.getElementById('tela').value = ("Carregado")
    window.onload = console.log("Evento de carregamento detectado!");
    window.onload = load;
})