const  elNomberOne = document.querySelector('.nomber-one');
const  elNomberTwo = document.querySelector('.nomber-two');
const  elNomberTheree = document.querySelector('.nomber-theree');



const elAnnuallyInput = document.querySelector('.annually-input');
const elMonthylInput = document.querySelector('.monthyl-input');

elAnnuallyInput.addEventListener('click', function () {
  elNomberOne.textContent = 199.99;
  elNomberTwo.textContent = 249.99;
  elNomberTheree.textContent = 399.99;
});


elMonthylInput.addEventListener('click', function () {
  elNomberOne.textContent = 19.99;
  elNomberTwo.textContent = 24.99;
  elNomberTheree.textContent = 39.99;
});