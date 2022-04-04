
const categoriesButton = document.querySelector('.app__categories-title');
const categoriesList = document.querySelector('.app__categories-list');

categoriesButton.addEventListener('click', e => {
  // if(document.querySelectorAll('.header__item-dropdown.active')) {
  //   document.querySelectorAll('.header__item-dropdown.active').forEach(elem => elem.classList.remove('active'));
  // }

  categoriesButton.closest('.app__filter-categories').classList.add('active');
  // button.closest('.header__item-dropdown').classList.add('open');
});

document.addEventListener('click', e => {
  if(!e.target.closest('.app__filter-categories')) {
    document.querySelector('.app__filter-categories.active').classList.remove('active');
  }
})