const container = document.querySelector('#container');
const input = document.querySelector('#number');
const button = document.querySelector('#convert-btn');
const output = document.querySelector('#output');

const isNotValidNumber = num => {
  if (!num) return "Please enter a valid number";
  if (num <= 0) return "Please enter a number greater than or equal to 1";
  if (num > 3999) return "Please enter a number less than or equal to 3999";
}

const converter = num => {
  let str = '';
  str += 'M'.repeat(Math.floor(num / 1000)) +
  'C'.repeat(Math.floor((num % 1000) / 100)) +
  'X'.repeat(Math.floor(((num % 1000) % 100) / 10)) +
  'I'.repeat(Math.floor(((num % 1000) % 100) % 10));

  return str
  .replace(/C{9}/, 'CM')
  .replace(/X{9}/, 'XC')
  .replace(/I{9}/, 'IX')
  .replace(/C{5}/, 'D')
  .replace(/X{5}/, 'L')
  .replace(/I{5}/, 'V')
  .replace(/C{4}/, 'CD')
  .replace(/X{4}/, 'XL')
  .replace(/I{4}/, 'IV');
}

const show = () => {
  output.hidden = false;
  if (isNotValidNumber(input.value)) {
    output.classList.add("error");
    output.innerText = isNotValidNumber(input.value);
  } else {
    output.classList.remove("error");
    output.innerText = converter(input.value);
  }
}

button.addEventListener('click', show);