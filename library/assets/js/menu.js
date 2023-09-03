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
    // if(event.key === 'Escape' || event.key === 'Backspace') {
    if(event.key === 'Escape') {
        document.querySelector('.header__menu').classList.remove('opened');
        document.querySelector('.profile__login').classList.remove('hidden__menu');
        document.querySelector('.register').
        classList.remove('show__register');
        document.getElementById('overlay').classList.remove('overlayed');
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
});




//open register menu

// let profileLoginRegister = document.getElementById('profile__login__register');
// profileLoginRegister.addEventListener('click', function(){
//     document.querySelector('.register').classList.add('show__register');
//     document.querySelector('.profile__login').classList.remove('hidden__menu');
//     document.getElementById('overlay').classList.add('overlayed');
// });



const openRegisterMenu = function (){
    // alert('111');
    document.querySelector('.register').classList.add('show__register');
    document.querySelector('.profile__login').classList.remove('hidden__menu');
    document.getElementById('overlay').classList.add('overlayed');
}

let profileLoginRegister = document.getElementById('profile__login__register');
let signUpBtn = document.getElementById('sign__up__btn');

profileLoginRegister.addEventListener('click', openRegisterMenu);
signUpBtn.addEventListener('click',openRegisterMenu);







//close register menu

document.getElementById('profile__login__register').addEventListener('click', event => {
    event.isClickOnMenu = true;
});

document.getElementById('register').addEventListener('click', event => {
    event.isClickOnMenu = true;
});

document.getElementById('sign__up__btn').addEventListener('click', event => {
    event.isClickOnMenu = true;
});

document.body.addEventListener('click', event => {
    if(event.isClickOnMenu) return;
    // alert('123');
    document.querySelector('.register').
    classList.remove('show__register');
    document.getElementById('overlay').classList.remove('overlayed');
});

//cross

document.getElementById('register__cross').addEventListener('click', function(){
    document.querySelector('.register').classList.toggle('show__register');
    document.getElementById('overlay').classList.remove('overlayed');
});