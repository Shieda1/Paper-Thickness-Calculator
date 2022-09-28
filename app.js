// https://www.omnicalculator.com/everyday-life/paper-thickness

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const paperthicknessRadio = document.getElementById('paperthicknessRadio');
const stackthicknessRadio = document.getElementById('stackthicknessRadio');
const quantityofpapersheetsRadio = document.getElementById('quantityofpapersheetsRadio');

let paperthickness;
let stackthickness = v1;
let quantityofpapersheets = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

paperthicknessRadio.addEventListener('click', function() {
  variable1.textContent = 'Stack thickness';
  variable2.textContent = 'Quantity of paper sheets';
  stackthickness = v1;
  quantityofpapersheets = v2;
  result.textContent = '';
});

stackthicknessRadio.addEventListener('click', function() {
  variable1.textContent = 'Paper thickness';
  variable2.textContent = 'Quantity of paper sheets';
  paperthickness = v1;
  quantityofpapersheets = v2;
  result.textContent = '';
});

quantityofpapersheetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Paper thickness';
  variable2.textContent = 'Stack thickness';
  paperthickness = v1;
  stackthickness = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(paperthicknessRadio.checked)
    result.textContent = `Paper thickness = ${computepaperthickness().toFixed(2)}`;

  else if(stackthicknessRadio.checked)
    result.textContent = `Stack thickness = ${computestackthickness().toFixed(2)}`;

  else if(quantityofpapersheetsRadio.checked)
    result.textContent = `Quantity of paper sheets = ${computequantityofpapersheets().toFixed(2)}`;
})

// calculation

function computepaperthickness() {
  return (Number(stackthickness.value) / Number(quantityofpapersheets.value)) * 10;
}

function computestackthickness() {
  return (Number(paperthickness.value) / 10) * Number(quantityofpapersheets.value);
}

function computequantityofpapersheets() {
  return Number(stackthickness.value) / (Number(paperthickness.value) / 10);
}