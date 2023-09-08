let offset = 0;
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
    if(offset === 0) {
        carretRight.classList.add('carret__opacity');
    }
    carretLeft.classList.remove('carret__opacity');
    i=1;
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
        carretLeft.classList.remove('carret__opacity');
        carretRight.classList.remove('carret__opacity');
        i=2;
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
        ('carret__opacity');
        carretRight.classList.remove('carret__opacity');
        i=3;
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
        ('carret__opacity');
        carretRight.classList.remove('carret__opacity');
        i=4;
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
    if(offset === -1900) {
        carretLeft.classList.add('carret__opacity');
    }
    carretRight.classList.remove('carret__opacity');
    i=5;
});

if(document.documentElement.clientWidth < 1430) {

    Array.from(document.querySelectorAll('.about__btn')).forEach(
        (el) => el.classList.remove('about__btn__active')
);
btn1.classList.add('about__btn__active');
    }

let i = 1;

let carretLeft = document.getElementById('carret__left');
carretLeft.addEventListener('click', function(){
    if(offset === -1900) {
        return;
    } else {
        Array.from(document.querySelectorAll('.about__btn')).forEach(
            (el) => el.classList.remove('about__btn__active')
        );
    carretRight.classList.remove('carret__opacity');
    offset += -475;
    i++;
    aboutPhotos.style.left = offset + 'px';
    }
    if(offset === -1900) {
        this.classList.add('carret__opacity');
    }
    document.getElementById(`btn${i}`).classList.add('about__btn__active');
});

let carretRight = document.getElementById('carret__right');
carretRight.addEventListener('click', function(){
    if(offset === 0) {
        return;
    } else {
        Array.from(document.querySelectorAll('.about__btn')).forEach(
            (el) => el.classList.remove('about__btn__active')
        );
        carretLeft.classList.remove('carret__opacity');
    offset += 475;
    i--;
    aboutPhotos.style.left = offset + 'px';
    }
    if(offset === 0) {
        this.classList.add('carret__opacity');
    }
    document.getElementById(`btn${i}`).classList.add('about__btn__active');
});




