"use strict";
const user = "test";
const pass = "1234";
let username = document.getElementById("name");
let password = document.getElementById("pswrd");

const button = document.getElementById("logInBtn");
const div1 = document.getElementById("div1");



const loggedIn = localStorage.getItem("username");

//Adding button avent listner.
button.addEventListener("click", function()
{
    //const username = nameInput.value;
    //const password = passwordInput.value;
    

    if (username.value == user && password.value == pass) {
        localStorage.setItem("username", user);
        div1.hidden = true;
        div2.hidden = false;
    }

    else {
        alert("Wrong Username Or Password");
    }
    
});

console.log(loggedIn)
console.log(user)

//Compare the username and the password of the local storage with the input.
if (loggedIn === user) 
{
    div1.hidden = true;
    console.log("test")
    //div1.hidden = true;
    //Creating the div element and appending it to body.
    let div2 = document.createElement("div");
    div2.id = "div2";
    document.body.appendChild(div2);

    //Creating the h1 element and appending it to div2
    let h1 = document.createElement("h1");
    h1.textContent = "Welcome";
    div2.appendChild(h1);
    
    //Creating the log out button and appending it to div2
    let logOutButton = document.createElement("button");
    logOutButton.textContent = "Log Out";
    div2.append(logOutButton);
 

    
    

    //Adding event listener to the logout button
    logOutButton.addEventListener("click", function(){
        
        //Hidding div2 and showing div1
        
        div2.hidden = true;
        div1.hidden = false;

        //Clearing the localstorage
        localStorage.removeItem("username");
    });
    

    //Hidding the div1 (username and password inputs)
    
}


