const blackLink = document.getElementById('black-link');
const whiteLink = document.getElementById('white-link');

const blackArrow = document.getElementById('black-arrow');
const whiteArrow = document.getElementById('white-arrow');


whiteArrow.addEventListener('click', ()=> {
    blackLink.style.display = 'flex';
});

blackArrow.addEventListener('click', ()=> {
    blackLink.style.display = 'none';
});
