let numeros = [5, 7, 1, 8, 9]

const ordenarCrescente = (a, b) => {
  return (a - b)
}

const ordenarDecrescente = (a,b) => {
  return (b - a)
}

console.log(numeros.sort(ordenarCrescente))