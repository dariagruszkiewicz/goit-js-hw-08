const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector("input[type='email']");
const textareaEl = document.querySelector("textarea[name='message']");

const addToLocalStorage = () => {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: inputEl.value,
      message: textareaEl.value,
    })
  );
};

formEl.addEventListener('input', addToLocalStorage);
formEl.addEventListener('input', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  const parsedData = JSON.parse(savedData);

  inputEl.value.textContent = parsedData.email || '';
  textareaEl.value.textContent = parsedData.message || '';
});

formEl.addEventListener('submit', () => {
  localStorage.clear();
  inputEl.value = '';
  textareaEl.value = '';
  console.log({
    email: inputEl.value,
    message: textareaEl.value,
  });
});
