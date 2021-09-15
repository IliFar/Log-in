
//Using JavaScript strict Mode.
"use strict";

//Setting variables and calling HTML elements
const user = "test";
const pass = "1234";

//Getting Elements by their Ids
let username = document.getElementById("name");
let password = document.getElementById("pswrd");
const btn = document.getElementById("button");
const div1 = document.getElementById("div1");

//Login button avent listener fired on click.
btn.addEventListener("click", function()
{
    //Check if value entered is the same as user variable and pass variable
    if (username.value == user && password.value == pass) {

        //Hiding the first div and saving user info into localstorage
        div1.style.display = "none";
        localStorage.setItem("username", user);
    }

    //in case user enters wrong username or password.
    else {
        const error = document.createElement("h3");
        error.textContent = "Wrong Username or Password";
        div1.appendChild(error);
        error.style.color = "white";
    }

    //Firing the loggedin function after the first condition
    loggedIn();
});

//Firing the function again so that the user will keep logged in as long as it didnt log out.
loggedIn();

//This is what will happen after the user is logged in.
function loggedIn () {

    //Check if username exists in localstorage
    if (localStorage.getItem("username") !== null) 
    {
        //Creating a welcome message as h1, appending it to body and adding style.
        const h1 = document.createElement("h1");
        h1.textContent = "Welcome";
        document.body.appendChild(h1);
        div1.style.display = "none";

        //Creating the logout button and appending it to body.
        const buttonOut = document.createElement("button");
        buttonOut.textContent = "Log Out";
        buttonOut.id = "button";
        document.body.appendChild(buttonOut);

        //Logout button event listner fired on click
        buttonOut.addEventListener("click", function(){
            
            //Displaying div1
            div1.style.display = "block";

            //Hiding h1
            h1.style.display = "none";

            //hiding the logout button
            buttonOut.style.display = "none";

            //Clearing out localstorage
            localStorage.removeItem("username");
            
        });
    }

}

