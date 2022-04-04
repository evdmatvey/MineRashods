const categoriesButton = document.querySelector('.app__categories-title');

categoriesButton.addEventListener('click', () => {
  categoriesButton.closest('.app__filter-categories').classList.add('active');
});

document.addEventListener('click', e => {
  if(!e.target.closest('.app__filter-categories')) {
    document.querySelector('.app__filter-categories.active').classList.remove('active');
  }
});

const selectTitle = document.querySelector('.app__select-title');
const selectListItems = document.querySelectorAll('.app__select-list li');

const selectClose = () => {
  document.querySelector('.app__form-select.active').classList.remove('active');
}

selectTitle.addEventListener('click', () => {
  selectTitle.closest('.app__form-select').classList.add('active');
});

document.addEventListener('click', e => {
  if(!e.target.closest('.app__form-select')) {
    selectClose();
  }
});

selectListItems.forEach(item => {
  item.addEventListener('click', () => {
    selectTitle.innerHTML = item.innerHTML;
    selectClose();
  })
})