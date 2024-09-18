const loginForm = document.querySelector("#login");
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collect login data
    const formData = new FormData(loginForm);

    // Display success message to user
    const messageH1 = document.querySelector("#message");
    messageH1.textContent = "Login Successful!!";

});

// Write a full name function

function fullName(firsName, middleName, lastName){
    // return firsName + " " + middleName + " " + lastName;

    return `${firsName} ${middleName} ${lastName}`
} 

const myName = fullName("Firdaus", "Suhuyini", "Fuseini")
console.log(myName);