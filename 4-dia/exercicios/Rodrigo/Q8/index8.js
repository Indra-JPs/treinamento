let form = document.getElementById("forms");
form.addEventListener("input", ()=>{
    let cpf = document.getElementById('cpf').value;
    
    // let letters = /^[0-9]*$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]\-[0-9][0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]\-[0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]\-$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9]$|^[0-9][0-9][0-9]\.[0-9]$|^[0-9][0-9][0-9]\.$/
    let letters = /^[0-9]*$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]\-[0-9][0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]\-[0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9][0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]\-$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9][0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9]$|^[0-9][0-9][0-9]\.[0-9]$|^[0-9][0-9][0-9]\.$/
    let flag = letters.test(cpf);
  
    // console.log(flag);
    flag !== true ? invalidData() : valideData(cpf);
});

const sendCpf = ()=>{

    let cpf = document.getElementById('cpf').value.length;
    if(cpf !==14){
        invalidData();
    }
    else{
        alert("your data was sent successfully");
    } 
}

const invalidData = () => {

    document.getElementById('cpf').style.borderColor = "rgb(255, 8, 8)";
    document.getElementById('cpf').style.background = "#4CAF50;";
    document.getElementById('not-right').style.visibility = "visible";
}

const valideData = (cpf) => {
    document.getElementById('cpf').style.borderColor = "#ccc";
    document.getElementById('not-right').style.visibility = "hidden";

    automaticaFormat(cpf);
}

const automaticaFormat = (cpf) => {

    let numeric = cpf.replace(/[^0-9]+/g, '');
    let cpfLength = numeric.length;

    let partOne = numeric.slice(0, 3) + ".";
    let partTwo = numeric.slice(3, 6) + ".";
    let partThree = numeric.slice(6, 9) + "-";

  
    let cpfInput = document.getElementById("cpf"); // here is the CPF ID of the input


    if (cpfLength < 4) { 
        cpfInput.value = numeric;
    } else if (cpfLength >= 4 && cpfLength < 7) {
        let formatCPF = partOne +
                       numeric.slice(3);
        cpfInput.value = formatCPF;
    } else if (cpfLength >= 7 && cpfLength < 10) {
        let formatCPF = partOne +
                       partTwo +
                       numeric.slice(6);
        cpfInput.value = formatCPF;
    } else if (cpfLength >= 10 && cpfLength < 12) {
        let formatCPF = partOne +
                       partTwo +
                       partThree +
                       numeric.slice(9);
        cpfInput.value = formatCPF;
    } else if (cpfLength >= 12) {
        let formatCPF = partOne +
                       partTwo +
                       partThree +
                       numeric.slice(9, 11);
        cpfInput.value = formatCPF;
    }
}