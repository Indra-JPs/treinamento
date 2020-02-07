var myName = 'Wescley';

function showName(name) {
    console.log(name);
}

function formatName(name) {
    var myName = name.toUpperCase();
    return myName;
}

console.log(formatName('Outro Nome'));
showName(myName);