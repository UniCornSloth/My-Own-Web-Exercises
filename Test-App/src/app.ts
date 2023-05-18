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
const portfolioSection = document.querySelector("#portfolio") as HTMLElement;
const aboutMeSection = document.querySelector("#about-me") as HTMLElement;
const contactMeSection = document.querySelector("#contact-me") as HTMLElement;
const downloadIcon = document.querySelector("#cvicon") as HTMLElement;
const downloadLink = document.querySelector("#download-link") as HTMLElement;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to show main page after login has been submitted
function showMainPage() {
  formContainer.style.display = "none";
  mainPage.style.display = "block";
}

// LOGIN SECTION
// Function using Regular Expression to define and make sure password is secure must be atleast 8 Characters long.
function isPasswordSecure(password: string): boolean {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Adding an event listener the form submit event
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
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Logging the values to the console for reference
  // Instead of logging to console. It will be logged to a data base
  console.log(`Username: ${username}, Password: ${password}`);

  //Show main page after submit button on login form has been clicked
  showMainPage();

  // Highlighting button on selected section
  highlightButton(portfolioSection);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Event Listeners for each section to be highlighted when clicked or selected.
// PORTFOLIO SELECTION
portfolioSection.addEventListener("click", (event) => {
  event.preventDefault();
  highlightButton(portfolioSection);
});
// ABOUT ME SELECTION
aboutMeSection.addEventListener("click", (event) => {
  event.preventDefault();
  highlightButton(aboutMeSection);
});
// CONTACT ME SELECTION
contactMeSection.addEventListener("click", (event) => {
  event.preventDefault();
  highlightButton(contactMeSection);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

portfolioSection.addEventListener("click", navigateToSection);
aboutMeSection.addEventListener("click", navigateToSection);
contactMeSection.addEventListener("click", navigateToSection);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Adding an event listener to the submit button and click event
// Creating the listener to listen/ check for when the user clicks the submit button
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  // Triggering the form submission event
  form.dispatchEvent(new Event("submit"));
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PAGE SECTIONS
const navLinks = document.querySelectorAll("#side-nav-bar a");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (event) => {
    event.preventDefault();
    const target = (event.target as HTMLElement).getAttribute("href");
    if (target) {
      navigateToSection(target);
    }
  });
});

function navigateToSection(target: string) {
  const section = document.querySelector(target);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  }
}

downloadLink.addEventListener("click", (event) => {
  event.preventDefault();
  const link = document.createElement("a");
  link.href = "/dlcontent/HerlingCV.pdf";
  link.download = "HerlingCV.pdf";
  link.click();
});
