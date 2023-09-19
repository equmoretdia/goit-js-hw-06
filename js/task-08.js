const loginForm = document.querySelector('.login-form');
// const inputEmail = document.querySelector('.login-form input[type="email"]');
// const inputPassword = document.querySelector(
//   '.login-form input[type="password"]'
// );
// const submitButton = document.querySelector('.login-form button');
const userLoginData = {
  Email: '',
  Password: '',
};

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === '' || password === '') {
    alert('Please fill in all the fields!');
  }
  // optional email input validation
  else if (
    !email.includes('.' || '@') ||
    !email.substring(email.indexOf('@') + 1).includes('.') ||
    email.indexOf('.') === email.length - 1
  ) {
    alert('Invalid email format!');
  }
  userLoginData['Email'] = email;
  userLoginData['Password'] = password;
  console.log(userLoginData);
  form.reset();
}
