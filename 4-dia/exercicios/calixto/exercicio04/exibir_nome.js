const form  = document.querySelector('form')

form.addEventListener('click',function(event){
    var $this = event.target;
      
    if($this.tagName === 'BUTTON'){
        alert(document.getElementById("nome").value)
    }

})


