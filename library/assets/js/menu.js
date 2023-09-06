document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('burger').addEventListener('click', () => {
        document.querySelector('.header__menu').classList.toggle('opened');
        document.querySelector('.profile__login').classList.remove('hidden__menu');
        document.querySelector('.logout__menu').classList.remove('hidden__menu');
    })
});

//click on menu check

document.getElementById('burger').addEventListener('click', event => {
    event.isClickOnMenu = true;
});

document.getElementById('profile').addEventListener('click', event => {
    event.isClickOnMenu = true;
});

document.getElementById('profile__login__register').addEventListener('click', event => {
    event.isClickOnMenu = true;
});

document.getElementById('profile__login__login').addEventListener('click', event => {
    event.isClickOnMenu = true;
});

document.getElementById('register').addEventListener('click', event => {
    event.isClickOnMenu = true;
});

document.getElementById('sign__up__btn').addEventListener('click', event => {
    event.isClickOnMenu = true;
});

document.getElementById('login__btn').addEventListener('click', event => {
    event.isClickOnMenu = true;
});

document.getElementById('profile__login__login').addEventListener('click', event => {
    event.isClickOnMenu = true;
});

document.getElementById('login__menu').addEventListener('click', event => {
    event.isClickOnMenu = true;
});

document.querySelector('.modal__profile').addEventListener('click', event => {
    event.isClickOnMenu = true;
});

document.querySelector('#logout__menu__profile').addEventListener('click', event => {
    event.isClickOnMenu = true;
});

document.querySelector('#profile__btn').addEventListener('click', event => {
    event.isClickOnMenu = true;
});


//Esc close menues

window.addEventListener('keydown', event => {
    // if(event.key === 'Escape' || event.key === 'Backspace') {
    if(event.key === 'Escape') {
        document.querySelector('.header__menu').classList.remove('opened');
        document.querySelector('.profile__login').classList.remove('hidden__menu');
        document.querySelector('.register').
        classList.remove('show__register');
        document.querySelector('.login__menu').
        classList.remove('show__login__menu');
        document.getElementById('overlay').classList.remove('overlayed');
        document.querySelector('.logout__menu').classList.remove('hidden__menu');
        document.querySelector('.modal__profile').classList.add('hide');
    }
});

//Profile menu

let profileIcon = document.getElementById('profile');

profileIcon.addEventListener('click', function(){
    if(document.querySelector('.profile').classList.contains('logged')) {
        document.querySelector('.logout__menu').classList.toggle('hidden__menu');
        document.querySelector('.header__menu').classList.remove('opened');
    } else {
        document.querySelector('.profile__login').classList.toggle('hidden__menu');
        document.querySelector('.header__menu').classList.remove('opened');
    }
});



//open modal

const openRegisterMenu = function (){
    // alert('111');
    document.querySelector('.register').classList.add('show__register');
    document.querySelector('.profile__login').classList.remove('hidden__menu');
    document.getElementById('overlay').classList.add('overlayed');
}

const openLoginMenu = function (){
    document.querySelector('.login__menu').classList.add('show__login__menu');
    document.querySelector('.profile__login').classList.remove('hidden__menu');
    document.getElementById('overlay').classList.add('overlayed');
}

const openProfileMenu = function (){
    document.querySelector('.modal__profile').classList.remove('hide');
    document.querySelector('.logout__menu').classList.remove('hidden__menu');
    document.getElementById('overlay').classList.add('overlayed');
}

//open register menu

let profileLoginRegister = document.getElementById('profile__login__register');
let signUpBtn = document.getElementById('sign__up__btn');
let loginBtn = document.getElementById('login__btn');

profileLoginRegister.addEventListener('click', openRegisterMenu);
signUpBtn.addEventListener('click',openRegisterMenu);
loginBtn.addEventListener('click',openLoginMenu);
document.querySelector('#profile__btn').addEventListener('click',openProfileMenu);


//cross

document.getElementById('register__cross').addEventListener('click', function(){
    document.querySelector('.register').classList.toggle('show__register');
    document.getElementById('overlay').classList.remove('overlayed');
});



//open login menu


let profileLoginLoginMenu = document.getElementById('profile__login__login');

profileLoginLoginMenu.addEventListener('click', openLoginMenu);




//cross

document.getElementById('login__menu__cross').addEventListener('click', function(){
    document.querySelector('.login__menu').classList.toggle('show__login__menu');
    document.getElementById('overlay').classList.remove('overlayed');
});

//open profile modal menu


document.querySelector('#logout__menu__profile').addEventListener('click', openProfileMenu);

//cross

document.querySelector('.modal__profile__cross').addEventListener('click', function(){
    document.querySelector('.modal__profile').classList.add('hide');
    document.getElementById('overlay').classList.remove('overlayed');
});



//register link

document.getElementById('register__link').addEventListener('click', function(){
    document.querySelector('.login__menu').classList.toggle('show__login__menu');
    document.getElementById('overlay').classList.remove('overlayed');
    
    openRegisterMenu();

});

//login link

document.getElementById('login__link').addEventListener('click', function(){
    document.querySelector('.register').classList.toggle('show__register');
    document.getElementById('overlay').classList.remove('overlayed');
    
    openLoginMenu();

});


//btn__buy

const btnBuy = document.querySelectorAll('.btn__buy');
for (let elem of btnBuy) {
    elem.addEventListener('click', openLoginMenu);
  }
for (let elem of btnBuy) {
elem.addEventListener('click', event => {
    event.isClickOnMenu = true;
});
}














//bodyclick

document.body.addEventListener('click', event => {
    if(event.isClickOnMenu) return;
    document.querySelector('.header__menu').classList.remove('opened');
    document.querySelector('.profile__login').classList.remove('hidden__menu');
    document.querySelector('.login__menu').
    classList.remove('show__login__menu');
    document.getElementById('overlay').classList.remove('overlayed');
    document.querySelector('.register').
    classList.remove('show__register');
    document.getElementById('overlay').classList.remove('overlayed');
    document.querySelector('.logout__menu').classList.remove('hidden__menu');
    document.querySelector('.modal__profile').classList.add('hide');
})
