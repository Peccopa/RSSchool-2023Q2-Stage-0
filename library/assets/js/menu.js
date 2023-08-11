document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('burger').addEventListener('click', () => {
        document.querySelector('.header__menu').classList.toggle('opened');
    })
});

document.getElementById('burger').addEventListener('click', event => {
    event.isClickOnMenu = true;
});

document.body.addEventListener('click', event => {
    if(event.isClickOnMenu) return;
    document.querySelector('.header__menu').classList.remove('opened');
})

window.addEventListener('keydown', event => {
    if(event.key === 'Escape' || event.key === 'Backspace') {
        document.querySelector('.header__menu').classList.remove('opened');
    }
});
