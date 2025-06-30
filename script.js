const responsiveMenuToggleButton = document.getElementById('responsiveMenuToggleButton');

const navbarlinks = document.querySelector('.navbar-links');

responsiveMenuToggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('open');
    responsiveMenuToggleButton.classList.toggle('open');
});

const allnavlinks = document.querySelectorAll('.navbar-links li');

allnavlinks.forEach(link  => {
    link.addEventListener('click', ()  => {
        navbarlinks.classList.remove('open');
        responsiveMenuToggleButton.classList.remove('open')
    })
});