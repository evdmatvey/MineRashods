let result = 0;
const resultElement = document.querySelector('.app__table-result span');

const calcResult = () => {
  let calcs = document.querySelectorAll('.app__row-calc');
  let calcsValues = [];

  calcs.forEach(calc => {
    calcsValues.push(Number(calc.textContent));
  })

  result = calcsValues.reduce((acc, current) => {
    return acc + current;
  }, 0);

  resultElement.classList.remove('gray');
  resultElement.textContent = result;
}