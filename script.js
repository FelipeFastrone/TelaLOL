const inputs = document.querySelectorAll('.input');

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add('spanActive');
}

const handleFocusOut = ({ target }) => {
    if()
  
  
  const span = target.previousElementSibling;
  span.classList.remove('spanActive');
}



inputs.forEach((input) =>
  input.addEventListener('focus', handleFocus));
inputs.forEach((input) =>
  input.addEventListener('focusout', handleFocusOut));
