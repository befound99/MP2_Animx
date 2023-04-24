// Delivery Note
const textarea = document.querySelector('#userNote');

textarea.addEventListener('input', () => {
  textarea.rows = 3;
  textarea.rows = Math.ceil(textarea.scrollHeight / 20);
});

