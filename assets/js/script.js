
let userForm = document.getElementById("userForm");

userForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    console.log("Il tasto submit è stato premuto")

    let userName = document.getElementById("inputName");
    let userSurname = document.getElementById("inputSurname");
    let userFavColor = document.getElementById("inputColor");
    // console.log(userName.value);
    document.getElementById("generatedPassword").innerHTML = userName.value + userSurname.value + userFavColor.value + 130;

})

// console.log()
