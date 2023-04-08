import throttle from 'lodash.throttle';

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

formEl.addEventListener('input', throttle(addToLocalStorage, 500));

const savedData = localStorage.getItem('feedback-form-state');
const parsedData = JSON.parse(savedData);

if (parsedData !== null) {
  formEl['email'].value = parsedData.email;
  formEl['message'].value = parsedData.message;
}

formEl.addEventListener('submit', () => {
  localStorage.clear();
  inputEl.value = '';
  textareaEl.value = '';
  console.log(
    `email: ${inputEl.value},
    message: ${textareaEl.value}`
  );
});
