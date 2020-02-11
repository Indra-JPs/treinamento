
const lampada_on = 'https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true';
document.getElementById('lampada').addEventListener('click',
function(){
    if(this.src ==lampada_on){
        document.getElementById('lampada').src='https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true';
    } else{
        document.getElementById('lampada').src= lampada_on;
    }
});