document.addEventListener('DOMContentLoaded', function () {
    console.log((localStorage.getItem('firstname')[0]));




    const form = document.getElementById('register__form');
    form.addEventListener('submit', formSend);

    function formSend(event) {
        event.preventDefault();
        localStorage.setItem('firstname', document.getElementById("firstname").value);
        localStorage.setItem('lastname', document.getElementById("lastname").value);
        localStorage.setItem('email', document.getElementById("email").value);
        localStorage.setItem('password', document.getElementById("password").value);

        document.querySelector('.register').classList.toggle('show__register');
        document.getElementById('overlay').classList.remove('overlayed');

        document.getElementById('human__head').style.display = 'none';
        document.getElementById('human__body').style.display = 'none';
        document.querySelector('.icon__ellipse').classList.add('icon__letters');
        document.querySelector('.icon__ellipse').textContent = localStorage.getItem('firstname')[0] + localStorage.getItem('lastname')[0];
    };

    const formLogin = document.getElementById('login__menu__form');
    formLogin.addEventListener('submit', formCheck);

    function formCheck(event) {
        event.preventDefault();
        alert('Check!');

        document.querySelector('.login__menu').classList.toggle('show__login__menu');
        document.getElementById('overlay').classList.remove('overlayed');
    };




});

