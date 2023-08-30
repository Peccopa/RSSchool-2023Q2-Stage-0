const books = document.querySelectorAll('.favorite__book');


let winter = document.getElementById('winter');
winter.addEventListener('click', function(){
    Array.from(document.querySelectorAll('.favorite__book')).forEach(
        (el) => el.classList.add('hidden__book')
    );
    books[0].classList.remove('hidden__book');
    books[1].classList.remove('hidden__book');
    books[2].classList.remove('hidden__book');
    books[3].classList.remove('hidden__book');
    books[0].style.opacity = 1;
    books[1].style.opacity = 1;
    books[2].style.opacity = 1;
    books[3].style.opacity = 1;
});

let spring = document.getElementById('spring');
spring.addEventListener('click', function(){
    Array.from(document.querySelectorAll('.favorite__book')).forEach(
        (el) => el.classList.add('hidden__book')
    );
    books[4].classList.remove('hidden__book');
    books[5].classList.remove('hidden__book');
    books[6].classList.remove('hidden__book');
    books[7].classList.remove('hidden__book');
    books[4].style.opacity = 1;
    books[5].style.opacity = 1;
    books[6].style.opacity = 1;
    books[7].style.opacity = 1;
});

let summer = document.getElementById('summer');
summer.addEventListener('click', function(){
    Array.from(document.querySelectorAll('.favorite__book')).forEach(
        (el) => el.classList.add('hidden__book')
    );
    books[8].classList.remove('hidden__book');
    books[9].classList.remove('hidden__book');
    books[10].classList.remove('hidden__book');
    books[11].classList.remove('hidden__book');
    books[8].style.opacity = 1;
    books[9].style.opacity = 1;
    books[10].style.opacity = 1;
    books[11].style.opacity = 1;
});

let autumn = document.getElementById('autumn');
autumn.addEventListener('click', function(){
    Array.from(document.querySelectorAll('.favorite__book')).forEach(
        (el) => el.classList.add('hidden__book')
    );
    books[12].classList.remove('hidden__book');
    books[13].classList.remove('hidden__book');
    books[14].classList.remove('hidden__book');
    books[15].classList.remove('hidden__book');
    books[12].style.opacity = 1;
    books[13].style.opacity = 1;
    books[14].style.opacity = 1;
    books[15].style.opacity = 1;
});



// books[0].classList.add('carret__opacity');
console.log(books[0]);