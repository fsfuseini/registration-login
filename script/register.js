//Get form elements by id
const registerForm = document.querySelector("#register");
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //Collect form data
    const formData = new FormData(registerForm);
    
    // Send data to Backend
    // Display success message to user
    const messageH1 = document.querySelector("#message");
    messageH1.textContent = "Account reistered successfully!";
//   console.log(
//     formData.get("username"),
//     formData.get("email"),
//     formData.get("password")
//   );
});
// Handle form submit event

// Declare variable age
const age = 71;
// Define square age function
function squareAge(age) {
  return age ** 2;
}

const squaredAge = squareAge(34);
console.log(squaredAge);

function fname(firstName, middleName, lastName) {
  return firstName + " " + middleName + " " + lastName;
}

const fullName = fname("Firdaus", "Suhuyini", "Fuseini");
console.log(fullName);
