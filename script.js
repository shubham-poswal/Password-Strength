const inputfield = document.querySelector("#password");
const outputfield = document.querySelector("#output");

inputfield.addEventListener("input", () => {
    let password = inputfield.value;
    if(password.length < 8) {
        outputfield.innerText = "Weak";
        outputfield.style.color = "red";

    }else {
        // outputfield.innerText = "Password so long";
        // outputfield.style.color = "green";


        console.log("is lowercase", password.search(/[a-z]/));

        if(password.search(/[a-z]/) ==-1){
            outputfield.innerText = "password must include lowercase letters";
            outputfield.style.color = "red";
        }else if(password.search(/[A-Z]/) ==-1){
            outputfield.innerText = "password must include uppercase letters";
            outputfield.style.color = "red";
        }else if(password.search(/[0-9]/) ==-1){
            outputfield.innerText = "password must include numbers";
            outputfield.style.color = "red";
        }else{
            outputfield.innerText = "Strong Password";
            outputfield.style.color = "green";
        }
    }
});
