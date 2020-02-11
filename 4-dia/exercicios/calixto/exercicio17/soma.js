document.querySelector("#btn-somar").addEventListener("click", function(){

    function somar(n1, n2){
      if(n1 === "" || n2 === ""){
        return 0;
      }else{
        return Number(n1) + Number(n2);
      }
    }

    let resultado = somar(document.querySelector("#soma1").value, document.querySelector("#soma2").value)
    
    document.querySelector("#resultado").value = resultado;
  })

  