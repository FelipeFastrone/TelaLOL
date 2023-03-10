const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.loginButton')

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('spanActive');
}

const handleFocusOut = ({ target }) => {
    if(target.value === '') {
  
  
  const span = target.previousElementSibling;
  span.classList.remove('spanActive');
 } 
}

const handleChange = () => {
   const [username, password] = inputs;
   if(username.value && password.value >= 8){
    button.removeAttribute('disabled');
} else {
   button.setAttribute('disabled', '')
}
}


inputs.forEach((input) =>
  input.addEventListener('focus', handleFocus));
inputs.forEach((input) =>
  input.addEventListener('focusout', handleFocusOut));
  inputs.forEach((input) =>
  input.addEventListener('input', handleChange));
