// const maskcpf = document.getElementById('cpf')

// document.getElementById('clica').addEventListener('click', function () {
//   document.getElementById("mostraCpf").innerHTML = maskcpf.value
// });

// document.addEventListener('keydown', function (event) { //pega o evento de pressionar uma tecla
//   if (event.keyCode != 46 && event.keyCode != 8) {//verifica se a tecla precionada nao e um backspace e delete
//     var i = document.getElementById("cpf").value.length; //aqui pega o tamanho do input
//     if (i === 3 || i === 7) //aqui faz a divisoes colocando um ponto no terceiro e setimo indice
//       document.getElementById("cpf").value = document.getElementById("cpf").value + ".";
//     else if (i === 11) //aqui faz a divisao colocando o tracinho no decimo primeiro indice
//       document.getElementById("cpf").value = document.getElementById("cpf").value + "-";
//   }
// });


// slice divide o array e você determina os elementos que quer imprinmir e onde deve parar
//exemplo: cpf.slice(0,3) ele imprime os elementos na posicao 0, 1, 2 e não imprime a partir da 3

// QUESTAO 8
// document.getElementById("cpf").addEventListener('keyup', function () {
//   let cpf = document.getElementById('cpf').value;
//   document.getElementById('resultado').value = cpf.slice(0, 3) + "."
//     + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(9);
// });

// //QUESTAO 9
document.getElementById("cpf").addEventListener('keyup', function () {
  let cpf = document.getElementById('cpf').value;
  document.getElementById('resultado').value = cpf.slice(0, 3) +
    cpf.slice(4, 7) + cpf.slice(8, 11) + cpf.slice(12);
});
