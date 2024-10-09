const resultSection = document.querySelector('#inp');
const button = document.querySelector('#check-btn');
const input = document.querySelector('#text-input');
const result = document.querySelector('#result');

const palindromeCheck = () => {
  if (!input.value) return alert('Please input a value');
  const strArray = input.value.replace(/[\W_]*/g, '').toLowerCase();
  const strArrayReversed = input.value.replace(/[\W_]*/g, '').toLowerCase().split('').reverse().join('');
  return strArray === strArrayReversed ? 
  `<b>${input.value}</b> is a palindrome` : 
  `<b>${input.value}</b> is not a palindrome`;
};

const embedResult = () => {
  if (palindromeCheck()) {
    result.hidden = false;
    result.innerHTML = palindromeCheck();
  } else {
    result.hidden = true;
  }
};

button.addEventListener('click', embedResult);
