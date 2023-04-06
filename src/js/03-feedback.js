{
  /* <form class="feedback-form" autocomplete="off">
      <label>
        Email
        <input type="email" name="email" autofocus />
      </label>
      <label>
        Message
        <textarea name="message" rows="8"></textarea>
      </label>
      <button type="submit">Submit</button>
    </form> */
}

const formEl = document.querySelector('.feedback-form');
console.log(formEl);
const inputEl = document.querySelector("input[type='email']");
console.log(inputEl.value);

const addToLocalStorage = localStorage.setItem(
  'feedback-form-state',
  inputEl.value
);
console.log(addToLocalStorage);
formEl.addEventListener('submit', () => {});
