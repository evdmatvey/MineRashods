const buttonAdd = document.querySelector('.app__form button');
const tableElement = document.querySelector('.app__table-rows');
const tableElements = [];

const renderRows = (elements) => {
  elements.forEach(elem => {
    let tag;

    switch(elem.tag) {
      case 'black': 
        tag = 'Без';
        break;
      case 'green': 
        tag = 'Товары';
        break;
      case 'yellow': 
        tag = 'Продукты';
        break;
      case 'purple': 
        tag = 'Разное';
        break;
      case 'orange': 
        tag = 'Книги';
        break;
      case 'blue': 
        tag = 'Одежда';
        break;
    } 

    let template = `<div class="app__row">
    <div class="app__row-name">${elem.name}</div>
    <div class="app__row-amount">${elem.amount}</div>
    <div class="app__row-price">${elem.price}</div>
    <div class="app__row-tag"><div class="app__row-tag--color app__row-tag--${elem.tag}">${tag}</div></div>
    <div class="app__row-calc">${Number(elem.price)*Number(elem.amount)}</div>
  </div>`;

    tableElement.insertAdjacentHTML('beforeend', template);
  })
}

buttonAdd.addEventListener('click', e => {
  e.preventDefault();
  let name = document.querySelector('input[name="name"]').value;
  let amount = document.querySelector('input[name="amount"]').value;
  let price = document.querySelector('input[name="price"]').value;
  let tag = document.querySelector('.app__select-title').dataset.select;

  tableElements.push({name, amount, price, tag});
  renderRows(tableElements);
});