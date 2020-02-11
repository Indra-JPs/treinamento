let str1 = "Dota é melhor que LOL"
let str2 = "Lol é melhor que CS"

function substring(str){
    if(str.includes('Dota')){
        return "true"
    }else{
        return "false"
    }
}

console.log(substring(str1))
console.log(substring(str2))

