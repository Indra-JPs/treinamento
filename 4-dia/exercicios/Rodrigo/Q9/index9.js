// capture a form
let form = document.getElementById("forms");

// manage a event listener for get any change on CPF input field
form.addEventListener("input", ()=>{
    // get the cpf field:
    let cpf = document.getElementById('cpf').value;
    // redex to validate the cpf sequence:
    let letters = /^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]\-[0-9][0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]\-[0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]\-$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.$|^[0-9][0-9][0-9]\.[0-9][0-9][0-9]$|^[0-9][0-9][0-9]\.[0-9][0-9]$|^[0-9][0-9][0-9]\.[0-9]$|^[0-9][0-9][0-9]\.$|^[0-9][0-9][0-9]$|^[0-9][0-9]$|^[0-9]$/;
    // a flag the verify using the regex if the cpf typed by the user is correct:
    let flag = letters.test(cpf);
    console.log(flag);
    /* if the cpf is correct and its size is larger than one, the valideData is called
        if not, the invalidData will be called and some the regions under field will potrays
        a warning and its border will be changed to red color*/
    (flag === true || cpf.length === 0) ? valideData(cpf) : invalidData() ;
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
}