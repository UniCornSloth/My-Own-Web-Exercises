// Login form
interface loginFormInformation {
  username: string;
  password: string;
}

// Class for the login form
class loginForm {
  private usernameInput: HTMLInputElement;
  private passwordInput: HTMLInputElement;
  private form: HTMLFormElement;

  constructor() {
    this.usernameInput = document.querySelector('.form input[type="text"]');
    this.passwordInput = document.querySelector('.form input[type="password"]');
    this.form = document.querySelector(".form") as HTMLFormElement;
    this.form.addEventListener("submit", this.onSubmit);
  }

  private onSubmit = (event: Event) => {
    event.preventDefault();

    const values: loginFormInformation = {
      username: this.usernameInput.value,
      password: this.passwordInput.value,
    };

    console.log(values);
  };
}

// Function for submit button after Username and Passward is filled in
// function handleSubmit(event: Event) {
//   event.preventDefault();
//   console.log("Button Clicked!");
// }

// const formSubmit = document.querySelector(".submit");

// formSubmit.addEventListener(".submit", handleSubmit);
