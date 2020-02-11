function load() {
    document.getElementById('resultado').value = ("Carregado com Javascript");
    window.onload = window.document.write(resultado.value);
    window.onload = console.log("Evento de carregamento detectado!");
  }
  window.onload = load;