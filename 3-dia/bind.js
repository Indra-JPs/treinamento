const handler = {
    id:"handlerId",
    click: function(){
    	alert(this.id);
    }
};

const button = document.getElementById('buttonId');
const button2 = document.getElementById('buttonId2');
button.addEventListener('click', handler.click);

const func = handler.click.bind(handler);
console.log(func);

//button2.addEventListener('click', );

function teste() {

}

const teste = function() {

}

const teste = () => {
    
}