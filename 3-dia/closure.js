// function func1(nome) {
//     const saudacao = 'Olá ' + nome;

//     function func2() {
//         console.log(saudacao)
//     }

//     func2();
// }

// func1('Wescley');

//////////////////////////


// function func1(nome) {
//     const saudacao = 'Olá ' + nome;

//     function func2() {
//         console.log(saudacao)
//     }

//     return func2;
// }

// const saudacaoWescley = func1('Wescley');
// func1('Wescley')();
//console.log(saudacaoWescley);
//saudacaoWescley();

////////////////////////////////

const contador = function(num) {
    let atual = 1;
    let timer = setInterval(() => {
        if (atual === num) {
            clearInterval(timer);
        }

        console.log(atual++, num);
    }, 1000);
}

contador(5);
contador(10);