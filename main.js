// main.js
const numberElement = document.querySelector('.number');
const incButton = document.querySelector('.btn-inc');
const decButton = document.querySelector('.btn-dec');
const clrButton = document.querySelector('.btn-clr');

let count = 0;

incButton.addEventListener('click', () => {
  count++;
  if (count < 0) { 
    count = 0; 
  }
  numberElement.textContent = count;
});

decButton.addEventListener('click', () => {
  count--;
  if (count < 0) { 
    count = 0; 
  }
  numberElement.textContent = count;
});

clrButton.addEventListener('click', () => {
  count = 0;
  numberElement.textContent = count;
});