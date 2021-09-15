// Calling elements and passing them variables
let nameInput = document.getElementById("name");
let passwordInput = document.getElementById("pswrd");
const button = document.getElementById("logInBtn");
const div1 = document.getElementById("div1");
const user = "test";
const password = "1234";
div1.hidden = false;

//Adding button avent listner.
button.addEventListener("click", function()
{
    signUp();
    logIn();
});

// Creating the signup function.
function signUp () 
{
    // Seeting up local storage.
    localStorage.setItem("username", "test");
    localStorage.setItem("password", "1234");
}

// Creating the login function.
function logIn () {
    
    // Getting the local storage items and setting them under variables.
    let user = localStorage.getItem("username");
    let pass = localStorage.getItem("password");

    // Compare the username and the password of the local storage with the input.
    if (user == nameInput.value && pass == passwordInput.value) {
        
        // Creating the div element and appending it to body.
        let div2 = document.createElement("div");
        div2.id = "div2";
        document.body.appendChild(div2);

        // Creating the h1 element and appending it to div2
        let h1 = document.createElement("h1");
        h1.textContent = "Welcome";
        div2.appendChild(h1);
        
        // Creating the log out button and appending it to div2
        let logOutButton = document.createElement("button");
        logOutButton.textContent = "Log Out";
        div2.append(logOutButton);
        logOutButton.addEventListener("click", function(){
            div1.hidden = false;
            div2.hidden = true;
            localStorage.clear();
        })

        div1.hidden = true;
    }

    else {
        alert("Wrong Username Or Password");
    }
}