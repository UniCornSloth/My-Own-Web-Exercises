function handleSubmit(event: Event) {
  event.preventDefault();
  console.log("Button Clicked!");
}

const formSubmit = document.querySelector(".submit");

formSubmit.addEventListener(".submit", handleSubmit);
