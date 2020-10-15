const navButton = document.querySelector('#nav-button');
navButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('click', navButton.children[0].style);
  navButton.children[0].classList.toggle('hide');
  navButton.children[1].classList.toggle('show');

  document.querySelector('.nav-container').classList.toggle('show');
});
