const form = document.querySelector("#js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector("#js-greeting");

const user_LS = "currentUser",
  showing_CN = "showing";

saveName = name => {
  // save user's name to local storage
  localStorage.setItem(user_LS, name);
};

showGreeting = name => {
  // display greeting message when cancel displayed form
  form.classList.remove(showing_CN);
  greeting.classList.add(showing_CN);
  greeting.innerHTML = `Hello ${name}, how are you today?`;
};

handleSubmit = event => {
  // page refresh issue when submit
  // avoid page refresh
  event.preventDefault();
  const currentValue = input.value;

  showGreeting(currentValue);
  saveName(currentValue);
};

askForName = () => {
  // display form
  form.classList.add(showing_CN);
  // when submit, save name and display it
  form.addEventListener("submit", handleSubmit);
};

loadName = () => {
  // load saved data
  const currentUser = localStorage.getItem(user_LS);
  if (currentUser === null) {
    // current user is not
    askForName();
  } else {
    // current user is
    showGreeting(currentUser);
  }
};

init = () => {
  // display user's name
  loadName();
};

init();
