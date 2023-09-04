document.addEventListener('DOMContentLoaded', function () {
    // console.log((localStorage.getItem('firstname')[0]));




    const form = document.getElementById('register__form');
    form.addEventListener('submit', formSend);

    function formSend(event) {
        event.preventDefault();
        localStorage.setItem('firstname', document.getElementById("firstname").value);
        localStorage.setItem('lastname', document.getElementById("lastname").value);
        localStorage.setItem('email', document.getElementById("email").value);
        localStorage.setItem('password', document.getElementById("password").value);

        // const generateRandomHex = [...Array(9)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
        localStorage.setItem('cardnumber', [...Array(9)].map(() => Math.floor(Math.random() * 16).toString(16)).join(''));

        document.querySelector('.register').classList.toggle('show__register');
        document.getElementById('overlay').classList.remove('overlayed');

//reg end !!!!!!

        // document.getElementById('human__head').style.display = 'none';
        // document.getElementById('human__body').style.display = 'none';
        // document.querySelector('.icon__ellipse').classList.add('icon__letters');
        // document.querySelector('.icon__ellipse').textContent = localStorage.getItem('firstname')[0] + localStorage.getItem('lastname')[0];
        
        // document.querySelector('#profile').title = localStorage.getItem('firstname') + ' ' + localStorage.getItem('lastname');
    };


//login

    const formLogin = document.getElementById('login__menu__form');
    formLogin.addEventListener('submit', formCheck);

    function formCheck(event) {
        event.preventDefault();
        alert('Check!');

        document.querySelector('.login__menu').classList.toggle('show__login__menu');
        document.getElementById('overlay').classList.remove('overlayed');
    };

// Check the card


document.querySelector('.check__btn').addEventListener('click', function () {
    let cardUserName = document.getElementById("cardusername").value;
    let cardNumber = document.getElementById("cardnumber").value;
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

    } else {
        alert('Wrong Name or Card Number');
    }
});




});


