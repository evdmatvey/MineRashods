const categoriesButton = document.querySelector('.app__categories-title');
const categoriesItems = document.querySelectorAll('.app__categories-list li');
const selectTitle = document.querySelector('.app__select-title');
const selectListItems = document.querySelectorAll('.app__select-list li');

const selectsClose = (selector) => {
  document.querySelector(selector).classList.remove('active');
}

const selects = (selectsTitle, selectItems, selectSelector) => {
  selectsTitle.addEventListener('click', () => {
    selectsTitle.closest(selectSelector).classList.add('active');
  });
  
  document.addEventListener('click', e => {
    if(!e.target.closest(selectSelector)) {
      selectsClose(selectSelector);
    }
  });
  
  selectItems.forEach(item => {
    item.addEventListener('click', () => {
      selectsTitle.innerHTML = item.innerHTML;
      selectsTitle.dataset.select = item.dataset.tag;
      selectsClose(selectSelector);
    })
  })
}

selects(selectTitle, selectListItems, '.app__form-select');
selects(categoriesButton, categoriesItems, '.app__filter-categories');