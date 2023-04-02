const generateBtn = document.getElementById('generate');
const outputDiv = document.getElementById('output');

generateBtn.addEventListener('click', () => {
  const min = parseFloat(document.getElementById('min').value);
  const max = parseFloat(document.getElementById('max').value);
  const decimals = parseInt(document.getElementById('decimals').value);

if (isNaN(min) || isNaN(max)) {
outputDiv.innerHTML = 'Please enter valid numbers for Min and Max.';
outputDiv.style.color = 'red';
return;
}

if (min >= max) {
outputDiv.innerHTML = 'Max must be greater than Min.';
outputDiv.style.color = 'red';
return;
}

const randomNum = (Math.random() * (max - min)) + min;
const roundedNum = randomNum.toFixed(decimals);

outputDiv.innerHTML = roundedNum;
outputDiv.style.color = '#333';
});