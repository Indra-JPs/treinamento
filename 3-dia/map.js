const fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const celcius = fahrenheit.map( function( elem ) {
    return Math.round( ( elem - 32 ) * 5 / 9 );
});


const par = fahrenheit.filter(elem => elem % 2 === 0)

const soma = fahrenheit.reduce((prev, elem) => {
    //console.log(prev, elem);
    return prev + elem;
}, 0)

console.log(celcius);
console.log(par);
console.log(soma);

