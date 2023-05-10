// Getting form elements from HTML document/ DOM
// First fetch all elements from DOM using queryselector and store in constants for use in functions and eventlisteners
// Elements for the LOGIN FORM
const form = document.querySelector("#form") as HTMLFormElement;
const usernameInput = document.querySelector("#username") as HTMLInputElement;
const passwordInput = document.querySelector("#password") as HTMLInputElement;
const submitButton = document.querySelector("#submit") as HTMLButtonElement;
const formContainer = document.querySelector(
  "#form-container"
) as HTMLFormElement;

// Elements on the Main Nav Bar
const mainPage = document.querySelector("#main-page") as HTMLElement;
const portfolioButton = document.querySelector("#portfolio") as HTMLElement;
const aboutMeButton = document.querySelector("#about-me") as HTMLElement;
const contactMeButton = document.querySelector("#contact-me") as HTMLElement;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LOGIN SECTION
// Function using Regular Expression to define and make sure password is secure must be atleast 8 Characters long.
function isPasswordSecure(password: string): boolean {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Show main page after login has been submitted
function showMainPage() {
  formContainer.style.display = "none";
  mainPage.style.display = "block";
}

// HighLighting button on selected section function
function highlightButton(selectedButton: HTMLElement) {
  const activeButton = document.querySelector(
    ".icon-bar .active"
  ) as HTMLElement;
  if (activeButton) {
    activeButton.classList.remove("active");
  }
  selectedButton.classList.add("active");
}

// Adding an event listener the form submit event
// Using addEventlistener on submit button listenschecks if username and password is filled in
form.addEventListener("submit", (event) => {
  // Prevent default on event functions
  event?.preventDefault();

  // Getting the username and password inputs and values
  // Values here are the details the user types in the username and password inputs on the form
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if form field containers are empty if empty throw error
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
  // Instead of logging to console. It will be logged to a data base
  console.log(`Username: ${username}, Password: ${password}`);

  //Show main page after submit button on login form has been clicked
  showMainPage();

  // Highlighting button on selected section
  highlightButton(portfolioButton);
});

// Event Listeners for each section to be highlighted when clicked or selected.
// PORTFOLIO SELECTION
portfolioButton.addEventListener("click", (event) => {
  event.preventDefault();
  highlightButton(portfolioButton);
});
// ABOUT ME SELECTION
aboutMeButton.addEventListener("click", (event) => {
  event.preventDefault();
  highlightButton(aboutMeButton);
});
// CONTACT ME SELECTION
contactMeButton.addEventListener("click", (event) => {
  event.preventDefault();
  highlightButton(contactMeButton);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Adding an event listener to the submit button and click event
// Creating the listener to listen/ check for when the user clicks the submit button
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  // Triggering the form submission event
  form.dispatchEvent(new Event("submit"));
});
