document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('register__form');
    form.addEventListener('submit', formSend);

    function formSend(event) {
        event.preventDefault();
        localStorage.setItem('firstname', document.getElementById("firstname").value);
        localStorage.setItem('lastname', document.getElementById("lastname").value);
        localStorage.setItem('email', document.getElementById("email").value);
        localStorage.setItem('password', document.getElementById("password").value);
        localStorage.setItem('visits', 0);
        localStorage.setItem('ownedbooks', '');

        // const generateRandomHex = [...Array(9)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
        localStorage.setItem('cardnumber', [...Array(9)].map(() => Math.floor(Math.random() * 16).toString(16)).join(''));

        document.querySelector('.register').classList.toggle('show__register');
        document.getElementById('overlay').classList.remove('overlayed');
        loginCondition();
};


//LOGIN

    const formLogin = document.getElementById('login__menu__form');
    formLogin.addEventListener('submit', formCheck);
    
    function formCheck(event) {
        event.preventDefault();
        // alert('Check!');

        if((localStorage.getItem('email') === document.getElementById("emailcard").value || localStorage.getItem('cardnumber') === document.getElementById("emailcard").value) && localStorage.getItem('password') === document.getElementById("loginpassword").value) {
            document.querySelector('.login__menu').classList.toggle('show__login__menu');
            document.getElementById('overlay').classList.remove('overlayed');
            loginCondition();
        } else {
        alert('Wrong Password, E-mail or a Card Number');
        document.querySelector('.login__menu').classList.toggle('show__login__menu');
        document.getElementById('overlay').classList.remove('overlayed');
        }
    };


const loginCondition = function () {
    //logged
        document.querySelector('.profile').classList.add('logged');
        localStorage.setItem('status', 'login');
        if(document.querySelector('.profile').classList.contains('logged')) {
            // alert('logged');
        }
    //check libcard
        if(localStorage.getItem('libcard') === 'purchased') {
            document.querySelector('.profile').classList.add('purchased');
        }
    //check owned books
        if (localStorage.getItem('ownedbooks')) {
            for (let elem of document.querySelectorAll('.btn__buy')) {
                if (localStorage.getItem('ownedbooks').includes(elem.parentNode.id)) {
                    elem.textContent = 'Own';
                    elem.classList.add('btn__own')
                    elem.classList.remove('btn__buy');
                    ;
                }
            }
        }

    //add book text
    let i = 0;
    let books = localStorage.getItem('ownedbooks').split(',');
    books.shift();

    for (i; i < books.length; i++) {
        let title = document.querySelector(`#${books[i]} h4`).textContent;
        let author = document.querySelector(`#${books[i]} h5`).textContent.slice(3);
        let li = document.createElement('li');
        li.className = 'modal__profile__book';
        li.textContent = title + ', ' + author;
        document.querySelector('.modal__profile__booklist').append(li);
    }

    //visits count
        localStorage.setItem('visits', Number(localStorage.getItem('visits')) + 1);
        document.querySelector('#visits__card').textContent = localStorage.getItem('visits');
        document.querySelector('#card__item__count').textContent = (localStorage.getItem('ownedbooks').split(',')).length - 1;
    //icon change
        document.querySelector('.human__head').classList.add('hide__display');
        document.querySelector('.human__body').classList.add('hide__display');
        document.querySelector('.icon__letters').textContent = localStorage.getItem('firstname')[0] + localStorage.getItem('lastname')[0];
    //title icon
        document.querySelector('#profile').title = localStorage.getItem('firstname') + ' ' + localStorage.getItem('lastname');
    //change card block
        document.querySelector('.section__cards__login').style.display = 'block';
        document.querySelector('.section__cards').style.display = 'none';
    //add placeholder
        document.querySelector('#cardusername__login').placeholder = localStorage.getItem('firstname') + ' ' + localStorage.getItem('lastname');
        document.querySelector('#cardnumber__login').placeholder = localStorage.getItem('cardnumber').toUpperCase();
    //profile__card__number
        document.querySelector('#profile__card__number').textContent = localStorage.getItem('cardnumber').toUpperCase();
    //modal register
        document.querySelector('.modal__profile__fullname').textContent = localStorage.getItem('firstname') + ' ' + localStorage.getItem('lastname');
        document.querySelector('.modal__profile__initials').textContent = localStorage.getItem('firstname')[0] + localStorage.getItem('lastname')[0];
        document.querySelector('.modal__profile__item__count').textContent = localStorage.getItem('visits');
        document.querySelector('#modal__profile__item__count').textContent = (localStorage.getItem('ownedbooks').split(',')).length - 1;



        document.querySelector('.modal__profile__cardnumber').textContent = localStorage.getItem('cardnumber').toUpperCase();
        document.querySelector('.modal__profile__copyicon').addEventListener('click', function () {
            navigator.clipboard.writeText(document.querySelector('.modal__profile__cardnumber').textContent);
        });
}

if(localStorage.getItem('status')) {
    if(localStorage.getItem('status') === 'login') {
        loginCondition ();
    }
}


//purchase

document.querySelector('.buy__card__form').addEventListener('submit', formPurchase);

function formPurchase(event) {
    event.preventDefault();
    if(document.querySelector('#buy__card__number').value.replace(/\s/g, '').length === 16) {
    } else {
        alert ('Card number must contain sixteen digits.');
        return;
    }
//purchased
    document.querySelector('.profile').classList.add('purchased');
    localStorage.setItem('libcard', 'purchased');
    if(document.querySelector('.profile').classList.contains('purchased')) {
        // alert('purchased');
    }
    document.querySelector('.buy__card').classList.add('hide');
    document.getElementById('overlay').classList.remove('overlayed');





}

//LOGOUT

const logoutCondition = function () {
//unlog
    document.querySelector('.profile').classList.remove('logged');
    localStorage.setItem('status', 'logout');
//icon change
    document.querySelector('.human__head').classList.remove('hide__display');
    document.querySelector('.human__body').classList.remove('hide__display');
    document.querySelector('.icon__letters').textContent = '';
//title icon
    document.querySelector('#profile').title = '';
//change card block
    document.querySelector('.section__cards__login').style.display = 'none';
    document.querySelector('.section__cards').style.display = 'block';
//add placeholder
    document.querySelector('#cardusername__login').placeholder = '';
    document.querySelector('#cardnumber__login').placeholder = '';
//profile__card__number
    document.querySelector('#profile__card__number').textContent = '';
//clear libcard info
    document.querySelector('.profile').classList.remove('purchased');
//clear ownrd books
    for (let elem of document.querySelectorAll('.btn__own')) {
            elem.classList.remove('btn__own');
            elem.classList.add('btn__buy');
            elem.classList.textContent = 'Buy';
    }




    }

//LOGOUT BTN

document.querySelector('#logout__menu__logout').addEventListener('click', logoutCondition);


//!!!!!!!!!!!!!!!
// loginCondition();
// document.querySelector('.profile').classList.add('purchased');
//!!!!!!!




















// Check the card


document.querySelector('.check__btn').addEventListener('click', function () {
    let cardUserName = document.getElementById("cardusername").value;
    let cardNumber = document.getElementById("cardnumber").value;
    if(localStorage.getItem('status')){
        if ((cardUserName.replace(/\s/g, '')).toLowerCase() === (localStorage.getItem('firstname') + localStorage.getItem('lastname')).toLowerCase() && (cardNumber.replace(/\s/g, '')).toLowerCase() === (localStorage.getItem('cardnumber'))) {
            document.querySelector('#cardusername__login').placeholder = localStorage.getItem('firstname') + ' ' + localStorage.getItem('lastname');
            document.querySelector('#cardnumber__login').placeholder = localStorage.getItem('cardnumber');
            document.querySelector('.check__btn').style.display = 'none';
            document.querySelector('.card__items').style.display = 'flex';
            setTimeout(() => {
                document.querySelector('.check__btn').style.display = 'block';
                document.querySelector('.card__items').style.display = 'none';
                document.getElementById("cardusername").value = '';
                document.getElementById("cardnumber").value = '';
            }, 10000);
            document.querySelector('#card__item__count__checkbooks').textContent = (localStorage.getItem('ownedbooks').split(',')).length - 1;
            document.querySelector('#card__item__count__checkvisits').textContent = localStorage.getItem('visits');

        } else {
            alert('Wrong Name or Card Number');
            document.getElementById("cardusername").value = '';
            document.getElementById("cardnumber").value = '';
        }
    }
});




});


