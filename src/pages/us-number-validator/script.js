const userInput = document.getElementById('user-input');
const CheckBtn = document.getElementById('check-btn');
const ClearBtn = document.getElementById('clear-btn');
const resultDiv = document.getElementById('results-div');

CheckBtn.addEventListener('click', () => {
  const num = userInput.value;
  if (!num) {
    alert('Please provide a phone number');
  } else if (/^1?\s?(\((?=[0-9]{3}\)))?[0-9]{3}((?<=\([0-9]{3})\))?[\s-]?[0-9]{3}[-\s]?[0-9]{4}$/.test(num)){
    resultDiv.insertAdjacentHTML('beforeend', `
      <p>Valid US number: ${num}<p>
      `);
  } else {
    resultDiv.insertAdjacentHTML('beforeend', `
      <p>Invalid US number: ${num}<p>
      `);
  }
  userInput.value = '';
});

ClearBtn.addEventListener('click', () => {
  document.getElementById('results-div').textContent = '';
});