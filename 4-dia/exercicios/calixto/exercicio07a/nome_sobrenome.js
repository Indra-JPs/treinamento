const form  = document.querySelector('form')

form.addEventListener('click',function(event){
    var $this = event.target;
      
    if($this.tagName === 'BUTTON'){
        const nome = document.querySelector("#nome").value;
        const sobrenome = document.querySelector("#sobrenome").value
        alert(`Olá ${nome} ${sobrenome}!`)
    }

})
