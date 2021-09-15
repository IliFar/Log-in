//Using JavaScript strict Mode.
"use strict";

//Setting variables and calling HTML elements
const user = "test";
const pass = "1234";
let username = document.getElementById("name");
let password = document.getElementById("pswrd");
const btn = document.getElementById("button");
const div1 = document.getElementById("div1");

btn.addEventListener("click", function()
{

    if (username.value == user && password.value == pass) {

        div1.style.display = "none";
        localStorage.setItem("username", user);
    }
    else {
        const error = document.createElement("h3");
        error.textContent = "Wrong Username or Password";
        div1.appendChild(error);
        error.style.backgroundColor = "blue";
    }
    userExist();
});
userExist();
function userExist () {
    if (localStorage.getItem("username") !== null) 
    {
        const h1 = document.createElement("h1");
        h1.textContent = "Welcome";
        document.body.appendChild(h1);
        div1.style.display = "none";

        const buttonOut = document.createElement("button");
        buttonOut.textContent = "Log Out";
        document.body.appendChild(buttonOut);

        buttonOut.addEventListener("click", function(){
            div1.style.display = "block";
            h1.style.display = "none";
            buttonOut.style.display = "none";
            localStorage.removeItem("username");
            
        });
    }

}





