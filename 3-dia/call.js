function sayAnyCharacter(teste) {  
    console.log(this.name + ": " + this.character);
};
var actor1 = {  
    name:"Clint Eastwood",
    character: "The Good"
};
var actor2 = {  
    name:"Lee Van Cleef",
    character: "The Bad"
};

sayAnyCharacter.call(actor1, "teste");  

sayAnyCharacter.call(actor2);  