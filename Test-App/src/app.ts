// Getting form elements from HTML document/ DOM
// First fetch all elements from DOM using queryselector and store in constants for use in functions and eventlisteners
// Elements for the LOGIN FORM
const form = document.querySelector("#form") as HTMLFormElement;
const usernameInput = document.querySelector("#username") as HTMLInputElement;
const passwordInput = document.querySelector("#password") as HTMLInputElement;
const submitButtonLogin = document.querySelector(
  "#submit-login"
) as HTMLButtonElement;
const formContainer = document.querySelector(
  "#form-container"
) as HTMLFormElement;

// Elements on the Main Nav Bar
const mainPage = document.querySelector(".main-page") as HTMLElement;
const portfolioSection = document.querySelector("#portfolio") as HTMLElement;
const aboutMeSection = document.querySelector("#about-me") as HTMLElement;
const contactMeSection = document.querySelector("#contact-me") as HTMLElement;
const downloadIcon = document.querySelector("#cvicon") as HTMLElement;
const downloadLink = document.querySelector("#download-link") as HTMLElement;

//---------------------------------------------------------------------------------------------------------------------------------------------------//
// FUNCTION SHOWING MAIN PAGE AFTER LOGIN DETAILS
function showMainPage(sectionId: string) {
  const sections = document.querySelectorAll(".main-page > section");
  for (const section of sections) {
    const element = section as HTMLElement;
    if (section.id === sectionId) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
  formContainer.style.display = "none";
  mainPage.style.display = "block";
  typeWriter();
}

// LOGIN SECTION
// Function using Regular Expression to define and make sure password is secure must be atleast 8 Characters long.
function isPasswordSecure(password: string): boolean {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------//
// Adding an event listener the login form submit event
// Using addEventlistener on submit button listens and checks if username and password is filled in
form.addEventListener("submit", (event) => {
  // Prevent default on event functions
  event?.preventDefault();

  // Getting the username and password inputs and values
  // Values here are the details the user types in the "username" and "password" inputs on the form
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if form field containers are empty if empty throw error
  if (username.trim() === "" || password.trim() === "") {
    alert("Please fill in Username and Password!");
    return;
  }

  // Check if password is secure and uses the correct input characters using regex
  if (!isPasswordSecure(password)) {
    alert(
      "Please enter a valid password that conatins at least one uppercas, one lower case, one digit and one special character! Must be atleast 8 characters long"
    );
    return;
  }
  //---------------------------------------------------------------------------------------------------------------------------------------------------//
  // Logging the values to the console for reference
  // Instead of logging to console. It will be logged to a data base
  console.log(`Username: ${username}, Password: ${password}`);

  //Show main page after submit button on login form has been clicked
  showMainPage("portfolio-content-section");

  // Highlighting button on selected section
  highlightButton(portfolioSection);
});
//---------------------------------------------------------------------------------------------------------------------------------------------------//
// Function to high light button on selected section on the nav bar
function highlightButton(selectedButton: HTMLElement) {
  const activeButton = document.querySelector(
    "#side-nav-bar .active"
  ) as HTMLElement;
  if (activeButton) {
    activeButton.classList.remove("active");
  }
  selectedButton.classList.add("active");
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------//
// Event Listeners for each section to be highlighted when clicked or selected.
// PORTFOLIO SELECTION
portfolioSection.addEventListener("click", (event) => {
  event.preventDefault();
  highlightButton(portfolioSection);
  showMainPage("portfolio-content-section");
});
// ABOUT ME SELECTION
aboutMeSection.addEventListener("click", (event) => {
  event.preventDefault();
  highlightButton(aboutMeSection);
  showMainPage("about-me");
});
// CONTACT ME SELECTION
contactMeSection.addEventListener("click", (event) => {
  event.preventDefault();
  highlightButton(contactMeSection);
  showMainPage("contact-me");
});

//---------------------------------------------------------------------------------------------------------------------------------------------------//
// Function to add flip animation on download icon
downloadIcon.addEventListener("mousedown", (event) => {
  event.preventDefault();
  downloadIcon.classList.add("flip");
});
downloadIcon.addEventListener("mouseup", (event) => {
  event.preventDefault();
  downloadIcon.classList.remove("flip");
});

downloadLink.addEventListener("mousedown", (event) => {
  event.preventDefault();
  downloadIcon.classList.add("flip");
});
downloadLink.addEventListener("mouseup", (event) => {
  event.preventDefault();
  downloadIcon.classList.remove("flip");
});

//---------------------------------------------------------------------------------------------------------------------------------------------------//
// Adding an event listener to the submit button and click event
// Creating the listener to listen/ check for when the user clicks the submit button
submitButtonLogin.addEventListener("click", (event) => {
  event.preventDefault();
  // Triggering the form submission event
  form.dispatchEvent(new Event("submit"));
});
//---------------------------------------------------------------------------------------------------------------------------------------------------//

// PAGE SECTIONS
// Typewriter Demo
let i: number = 0;
let txt: string = "Web Developer Student"; // The text content
let speed: number = 90; //The speed/duration of the effect in milliseconds for the text to "write on page"

function typeWriter() {
  if (i < txt.length) {
    const element = document.getElementById("typewriterdemo");
    if (element) {
      element.innerHTML += txt.charAt(i); //charAt(i) property of the element is updated by appending the character at the current index. This adds the character at the current index
    }
    i++; // This increments the index 'i' to move to the next character in the string.
    setTimeout(typeWriter, speed); //This sets the speed at wich the characters are displayed on the page.
  }
} //The typewritere function is called to display the the characters one at a time.
//---------------------------------------------------------------------------------------------------------------------------------------------------//
// Contact Form submit function
function sendMessage() {
  const nameInput = document.getElementById("name-input") as HTMLInputElement;
  const emailInput = document.getElementById("email-input") as HTMLInputElement;
  const messageTextarea = document.getElementById(
    "message-textarea"
  ) as HTMLTextAreaElement;

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageTextarea.value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all the fields!");
    return;
  }

  console.log(`Name:`, name);
  console.log(`Name:`, email);
  console.log(`Name:`, message);

  nameInput.value = "";
  emailInput.value = "";
  messageTextarea.value = "";
}

const sendButton = document.getElementById("send-button") as HTMLButtonElement;
sendButton.addEventListener("click", sendMessage);

//---------------------------------------------------------------------------------------------------------------------------------------------------//
// PAGE BTTONS
// Get the necessary elements
const aboutSection = document.getElementById("about-me");
const contactSection = document.getElementById("contact-me");
const nextPageAboutButton = document.getElementById(
  "next-page-about"
) as HTMLButtonElement;
const nextPageContactButton = document.getElementById(
  "next-page-contact"
) as HTMLButtonElement;
const nextPageHomeButton = document.getElementById(
  "next-page-home"
) as HTMLButtonElement;

// Function to hide all sections except the selected section

// Event listeners for section selection
nextPageHomeButton.addEventListener("click", function () {
  showMainPage("portfolio-content-section");
  highlightButton(portfolioSection);
});

nextPageAboutButton.addEventListener("click", function () {
  showMainPage("about-me");
  highlightButton(aboutMeSection);
});
nextPageContactButton.addEventListener("click", function () {
  showMainPage("contact-me");
  highlightButton(contactMeSection);
});
