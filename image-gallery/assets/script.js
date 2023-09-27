const imagesBlock = document.querySelector('.images');
const loadMore = document.querySelector('.load-more');

const apiKey = '3IDd65DtUkHcD7WW4Aj4kQbHDiLF6bAie9aDTHhDT1Q';
const perPage = 15;
let currentPage = 1;
const url = `https://api.unsplash.com/search/photos?query=spring&per_page=${perPage}&orientation=landscape&client_id=${apiKey}`;
let state = [];
//test
const urlTest = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=15`;
//get images
const getImages = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if(response.ok && data.length) {
            state = data;
            setImages();
        }
    } catch (err) {
        console.log(err);
    }
};
//set images
const setImages = (images) => {
    console.log(state);
    imagesBlock.innerHTML += state.map(img =>
        `<li class="card"><img src="${img.urls.regular}" alt="photo">
            <div class="info">
                <div class="author">
                    <span class="material-symbols-outlined">photo_camera</span>
                    <p>${img.user.name}</p>
                </div>
                <button><span class="material-symbols-outlined">download</span></button>
            </div>
        </li>`
    ).join('');
};

//run
getImages(urlTest);