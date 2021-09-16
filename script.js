
//Using JavaScript strict Mode.
"use strict";

//Ställa in variabler
const user = "test";
const pass = "1234";

//Skaffa element genom sina ID: er
let username = document.getElementById("name");
let password = document.getElementById("pswrd");
const btn = document.getElementById("button");
const div1 = document.getElementById("div1");

//Login button avent listener fired on click.
btn.addEventListener("click", function()
{
    //Kontrollera om det angivna värdet är samma som användarvariabel och passvariabel
    if (username.value == user && password.value == pass) {

        //Döljer den första div och sparar användarinformation i lokal lagring
        div1.style.display = "none";
        localStorage.setItem("username", user);
    }

    //Om användaren anger fel användarnamn eller lösenord.
    else {
        const error = document.createElement("h3");
        error.textContent = "Wrong Username or Password";
        error.id = "error"
        div1.appendChild(error);
        
    }

    //Avfyrar loggedin funktionen efter det första if stats.
    loggedIn();
});

//Avfyrar funktionen igen så att användaren fortsätter att vara inloggad så länge den inte loggade ut.
loggedIn();

//Detta är vad som kommer att hända efter att användaren har loggat in.
function loggedIn () {

    //Kontrollera om användarnamn finns i lokal lagring
    if (localStorage.getItem("username") !== null) 
    {
        //Skapa ett välkomstmeddelande som h1, lägga till det i body och lägga till stil.
        const h1 = document.createElement("h1");
        h1.textContent = "Welcome";
        document.body.appendChild(h1);
        div1.style.display = "none";

        //Skapa logout knappen och lägg till den i body.
        const buttonOut = document.createElement("button");
        buttonOut.textContent = "Log Out";
        buttonOut.id = "button";
        document.body.appendChild(buttonOut);

        //Logga ut knappen Event Listener avfyras på klick
        buttonOut.addEventListener("click", function(){
            
            //Visar div1
            div1.style.display = "block";

            //Döljer h1
            h1.style.display = "none";

            //Döljer logout button
            buttonOut.style.display = "none";

            //Rensar ut lokal lagring
            localStorage.removeItem("username");
            
        });
    }

}

