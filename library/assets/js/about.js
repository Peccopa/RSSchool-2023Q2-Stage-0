let offset = 0;
// let aboutBtnClass = document.querySelectorAll('.about__btn');
// console.log(aboutBtnClass);
const aboutPhotos = document.querySelector('.about__photos');

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function(){
    if(offset === 0) {
        return;
    }
    offset = 0;
    offset += 0;
    aboutPhotos.style.left = offset + 'px';
    Array.from(document.querySelectorAll('.about__btn')).forEach(
        (el) => el.classList.remove('about__btn__active')
    );
    this.classList.add('about__btn__active');
});

let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function(){
    if(document.documentElement.clientWidth > 1430) {
        if(offset === 0) {
            return;
        }
        offset = 0;
        offset += 0;
        aboutPhotos.style.left = offset + 'px';
        Array.from(document.querySelectorAll('.about__btn')).forEach(
            (el) => el.classList.remove('about__btn__active')
    );
    this.classList.add('about__btn__active');
    } else {
        if(offset === -475) {
            return;
        }
        offset = 0;
        offset += -475;
        aboutPhotos.style.left = offset + 'px';
        Array.from(document.querySelectorAll('.about__btn')).forEach(
            (el) => el.classList.remove('about__btn__active')
        );
        this.classList.add('about__btn__active');
    }
});

let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function(){
    if(document.documentElement.clientWidth > 1430) {
        if(offset === -475) {
            return;
        }
        offset = 0;
        offset += -475;
        aboutPhotos.style.left = offset + 'px';
        Array.from(document.querySelectorAll('.about__btn')).forEach(
            (el) => el.classList.remove('about__btn__active')
    );
    this.classList.add('about__btn__active');
    } else {
        if(offset === -950) {
            return;
        }
        offset = 0;
        offset += -950;
        aboutPhotos.style.left = offset + 'px';
        Array.from(document.querySelectorAll('.about__btn')).forEach(
            (el) => el.classList.remove('about__btn__active')
        );
        this.classList.add('about__btn__active');
    }
});

let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', function(){
    if(document.documentElement.clientWidth > 1430) {
        if(offset === -950) {
            return;
        }
        offset = 0;
        offset += -950;
        aboutPhotos.style.left = offset + 'px';
        Array.from(document.querySelectorAll('.about__btn')).forEach(
            (el) => el.classList.remove('about__btn__active')
    );
    this.classList.add('about__btn__active');
    } else {
        if(offset === -1425) {
            return;
        }
        offset = 0;
        offset += -1425;
        aboutPhotos.style.left = offset + 'px';
        Array.from(document.querySelectorAll('.about__btn')).forEach(
            (el) => el.classList.remove('about__btn__active')
        );
        this.classList.add('about__btn__active');
    }
});

let btn5 = document.getElementById('btn5');
btn5.addEventListener('click', function(){
    if(offset === -1900) {
        return;
    }
    offset = 0;
    offset += -1900;
    aboutPhotos.style.left = offset + 'px';
    Array.from(document.querySelectorAll('.about__btn')).forEach(
        (el) => el.classList.remove('about__btn__active')
    );
    this.classList.add('about__btn__active');
});




if(document.documentElement.clientWidth < 1430) {

    Array.from(document.querySelectorAll('.about__btn')).forEach(
        (el) => el.classList.remove('about__btn__active')
);
btn1.classList.add('about__btn__active');
    }