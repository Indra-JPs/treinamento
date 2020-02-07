const table = document.querySelector('table');

table.addEventListener('click', function(event){
    var $this = event.target;
    console.log($this.tagName);

    if($this.tagName === 'A') {
        console.log($this.getAttribute('id'))
    }
});