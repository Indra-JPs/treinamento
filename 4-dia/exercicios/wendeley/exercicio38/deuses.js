let deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr'];

deuses.map((deus) =>{
    document.querySelector("#deuses").innerHTML += `<li>${deus}</li>`
})