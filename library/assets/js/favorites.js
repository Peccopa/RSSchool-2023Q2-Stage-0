const books = document.querySelectorAll('.favorite__book');

// function smoothScroll(){
//     document.querySelector('.section__favorites').scrollIntoView({
//         behavior: 'smooth'
//     });
// }

let winter = document.getElementById('winter');
winter.addEventListener('click', function(){
    // smoothScroll();
    Array.from(document.querySelectorAll('.favorite__book')).forEach(
        (el) => el.style.opacity = 0
        );


    Array.from(document.querySelectorAll('.favorite__book')).forEach(
        (el) => setTimeout(() => el.classList.remove('hidden__book'), 400)
        );
        setTimeout(() => {
    books[0].classList.add('hidden__book');
    books[1].classList.add('hidden__book');
    books[2].classList.add('hidden__book');
    books[3].classList.add('hidden__book');
        }, 400);
    Array.from(document.querySelectorAll('.favorite__book')).forEach(
        (el) => setTimeout(() => el.style.opacity = 1, 500)
        );
});

let spring = document.getElementById('spring');
spring.addEventListener('click', function(){
    // smoothScroll();
    Array.from(document.querySelectorAll('.favorite__book')).forEach(
        (el) => el.style.opacity = 0
        );
    Array.from(document.querySelectorAll('.favorite__book')).forEach(
        (el) => setTimeout(() => el.classList.remove('hidden__book'), 400)
        );
        setTimeout(() => {
    books[4].classList.add('hidden__book');
    books[5].classList.add('hidden__book');
    books[6].classList.add('hidden__book');
    books[7].classList.add('hidden__book');
        }, 400);
    Array.from(document.querySelectorAll('.favorite__book')).forEach(
        (el) => setTimeout(() => el.style.opacity = 1, 500)
        );
});

let summer = document.getElementById('summer');
summer.addEventListener('click', function(){
    // smoothScroll();
    Array.from(document.querySelectorAll('.favorite__book')).forEach(
        (el) => el.style.opacity = 0
        );
    Array.from(document.querySelectorAll('.favorite__book')).forEach(
        (el) => setTimeout(() => el.classList.remove('hidden__book'), 400)
        );
        setTimeout(() => {
    books[8].classList.add('hidden__book');
    books[9].classList.add('hidden__book');
    books[10].classList.add('hidden__book');
    books[11].classList.add('hidden__book');
        }, 400);
    Array.from(document.querySelectorAll('.favorite__book')).forEach(
        (el) => setTimeout(() => el.style.opacity = 1, 500)
        );
});

let autumn = document.getElementById('autumn');
autumn.addEventListener('click', function(){
    // smoothScroll();
    Array.from(document.querySelectorAll('.favorite__book')).forEach(
        (el) => el.style.opacity = 0
        );
    Array.from(document.querySelectorAll('.favorite__book')).forEach(
        (el) => setTimeout(() => el.classList.remove('hidden__book'), 400)
        );
        setTimeout(() => {
    books[12].classList.add('hidden__book');
    books[13].classList.add('hidden__book');
    books[14].classList.add('hidden__book');
    books[15].classList.add('hidden__book');
        }, 400);
    Array.from(document.querySelectorAll('.favorite__book')).forEach(
        (el) => setTimeout(() => el.style.opacity = 1, 500)
        );
});

// let timVine = document.getElementById("section__favorites"); //блок ниже
let navbar = document.getElementById("fixed__season");// навигация
let favoritesContent = document.getElementById('favorites__content');
favoritesContent.style.marginTop = "103" + 'px';


window.addEventListener("scroll", e => {
  let scrollPos = window.scrollY;
  if (scrollPos > 1730 && scrollPos < 4110) {
    navbar.classList.add('sticky');
    favoritesContent.style.margin = "160";
  } else {
    navbar.classList.remove('sticky');
  }
});