// Login form
// Interface that defines details for login form
interface loginFormInformation {
  username: string;
  password: string | number;
}

// Class for the login form
class loginForm {
  //Properties that reference the HTML input and form element
  usernameInput: HTMLInputElement;
  passwordInput: HTMLInputElement;
  form: HTMLFormElement;

  // Methods
  // Constructor method that intitializes the class and sets up event listeners
  constructor() {
    this.usernameInput = document.querySelector(
      '.form input[type="text"]'
    )! as HTMLInputElement;
    this.passwordInput = document.querySelector(
      '.form input[type="text"]'
    )! as HTMLInputElement;
    this.form = document.querySelector(".form") as HTMLFormElement;

    // Adding event listener for the form submission event on button
    this.form.addEventListener("submit", this.onSubmit);
  }

  // Method that is called when the form is submitted
  onSubmit = (event: Event) => {
    // Prevent the default form submission behavior, always use prevent default on this function
    event.preventDefault();

    // Create an object that stores the form data as key-value pairs
    const values: loginFormInformation = {
      username: this.usernameInput.value,
      password: this.passwordInput.value,
    };

    // Log the form data to console
    console.log(`Username: ${values.username}, Password: ${values.password}`);
  };
}
console.log("Hallo");

// Function for submit button after Username and Passward is filled in
// function handleSubmit(event: Event) {
//   event.preventDefault();
//   console.log("Button Clicked!");
// }

// const formSubmit = document.querySelector(".submit");

// formSubmit.addEventListener(".submit", handleSubmit);
