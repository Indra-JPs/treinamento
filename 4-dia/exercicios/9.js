document.getElementById('cpf').addEventListener('keyup', function(){
    const cpf = this.value; 
    document.getElementById('cpfSemPonto').innerHTML=cpf.slice(0,3)+cpf.slice(4,7)+cpf.slice(8,11)+cpf.slice(12,)
})