
function off() {
    document.getElementById("lamp").src = "off.jpg";
}
 
function on() {
    document.getElementById("lamp").src = "on.jpg";
}

function piscar() {
   var intervalo = 0;
   var contador = 0;
   while(contador < 100){
       intervalo += 80;
       setTimeout("document.getElementById('lamp').src='on.jpg';",intervalo);
       intervalo += 80;
       setTimeout("document.getElementById('lamp').src='off.jpg';",intervalo);
        contador++;
    }
 
}











