document.querySelector("#cpfPoint").addEventListener("keyup", function(){
  let cpfPoint = document.querySelector("#cpfPoint").value;
  let noPointCpf = cpfPoint.replace(/-/g, "");
  noPointCpf = noPointCpf.split(".").join("");
  document.querySelector("#noPointCpf").innerHTML = noPointCpf;
})