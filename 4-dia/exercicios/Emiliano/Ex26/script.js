const red = ["redação", " redação", " redação", " redação", " redação"];
red.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item;
}

document.getElementById("resultado").innerHTML = red;