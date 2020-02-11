document.querySelector("#btn-somar").addEventListener("click", function(){

    function somar(n1, n2){
      return (Number(n1) + Number(n2));
    }

    const numero1 = document.querySelector("#soma1").value;
    const numero2 = document.querySelector("#soma2").value;
    const resultado = somar(numero1, numero2)
    
    document.querySelector("#resultado").value = resultado;
  })

  