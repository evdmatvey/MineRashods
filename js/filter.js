const tagFilterElements = document.querySelectorAll('.app__categories-list li');

tagFilterElements.forEach(elem => {
  elem.addEventListener('click', () => {
    let tag = elem.dataset.tag;

    if(tag == 'black') {
      renderRows(tableElements)
    } else {
      let filter = tableElements.filter(elem => elem.tag == tag);
      if(filter.length == 0) {
        resultElement.classList.add('gray');
        resultElement.textContent = 'тут пока пусто';
        renderRows(filter);
      } else {
        renderRows(filter);
      }
    }
  })
})