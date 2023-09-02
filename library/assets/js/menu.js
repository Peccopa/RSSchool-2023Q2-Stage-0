document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('burger').addEventListener('click', () => {
        document.querySelector('.header__menu').classList.toggle('opened');
        document.querySelector('.profile__login').classList.remove('hidden__menu');
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
        document.querySelector('.profile__login').classList.remove('hidden__menu');
    }
});

//Profile menu

let profileIcon = document.getElementById('profile');
profileIcon.addEventListener('click', function(){
    document.querySelector('.profile__login').classList.toggle('hidden__menu');
    document.querySelector('.header__menu').classList.remove('opened');
});

// document.getElementById('profile__login').addEventListener('click', event => {
//     event.isClickOnMenu = true;
// });

document.getElementById('profile').addEventListener('click', event => {
    event.isClickOnMenu = true;
});

document.body.addEventListener('click', event => {
    if(event.isClickOnMenu) return;
    document.querySelector('.profile__login').classList.remove('hidden__menu');
    
})