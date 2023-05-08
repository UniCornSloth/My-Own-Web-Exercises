// Getting form elements from HTML document/ DOM
// First fetch all elements from DOM using queryselector and store in constants for use in functions and eventlisteners
const form = document.querySelector("#form") as HTMLFormElement;
const usernameInput = document.querySelector("#username") as HTMLInputElement;
const passwordInput = document.querySelector("#password") as HTMLInputElement;
const submitButton = document.querySelector("#submit") as HTMLButtonElement;
const formContainer = document.querySelector(
  "#form-container"
) as HTMLFormElement;
const header = document.querySelector("#h1") as HTMLElement;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Function using Regular Expression to define and make sure password is secure must be atleast 8 Characters long.
function isPasswordSecure(password: string): boolean {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Adding an event listener the form submit event
// Using addEventlistener on submit button listenschecks if username and password is filled in
form.addEventListener("submit", (event) => {
  // Prevent default on event functions
  event?.preventDefault();

  // Getting the username and password inputs and values
  // Values here are the details the user types in the username and password inputs on the form
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if form field contains are empty if empty throw error
  if (username.trim() === "" || password.trim() === "") {
    alert("Please fill in username!");
    return;
  }

  // Check if password is secure and uses the correct input characters using regex
  if (!isPasswordSecure(password)) {
    alert(
      "Please enter a valid password that conatins at least one uppercas, one lower case, one digit and one special character! Must be atleast 8 characters long"
    );
    return;
  }

  // Logging the values to the console for reference
  // Instead of loggin it, can be used to actually log in to page
  console.log(`Username: ${username}, Password: ${password}`);

  // Hiding form simulating loggin in to user profile page
  formContainer.style.display = "none";
  header.style.display = "none";
  // Redirecting to user profile page
  // window.location.href = "about:blank";
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Adding an event listener to the submit button and click event
// Creating the listener to listen/ check for when the user clicks the submit button
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  // Triggering the form submission event
  form.dispatchEvent(new Event("submit"));
});
