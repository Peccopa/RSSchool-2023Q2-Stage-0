const imagesBlock = document.querySelector('.images');
const loadMoreBtn = document.querySelector('.load-more');
const searchInput = document.querySelector('.search-input');

const apiKey = '3IDd65DtUkHcD7WW4Aj4kQbHDiLF6bAie9aDTHhDT1Q';
const perPage = 3;
let currentPage = 0;
let inputValue = null;
const url = `https://api.unsplash.com/search/photos?query=gallery&page=${currentPage}&per_page=${perPage}&client_id=${apiKey}`;
// const url = `https://api.unsplash.com/search/photos?query=spring&per_page=${perPage}&orientation=landscape&client_id=${apiKey}`;
let state = [];
//test
// const urlTest = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=15`;
//get images
const getImages = async (url) => {
    currentPage++;
    loadMoreBtn.textContent = 'Loading...';
    loadMoreBtn.classList.add('disabled');
    try {
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        console.log(data);
        if(response.ok && data.results.length) {
            state = data.results;
            loadMoreBtn.textContent = 'Show me more';
            loadMoreBtn.classList.remove ('disabled');
            setImages();
            console.log('yeap');
        }
        console.log('noup');
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
// search images
const searchImages = (e) => {
    if(e.key === 'Enter') {
        inputValue = e.target.value;
        console.log(inputValue);
        imagesBlock.innerHTML = '';
        // let url = `https://api.unsplash.com/search/photos?query=${inputValue}&page=1&per_page=${perPage}&client_id=${apiKey}`;
        getImages(`https://api.unsplash.com/search/photos?query=${inputValue}&page=${currentPage}&per_page=${perPage}&client_id=${apiKey}`);
        // getImages(`https://api.unsplash.com/photos/random?client_id=${apiKey}&count=1`);
    }
};


//run
getImages(url);
//load btn event
loadMoreBtn.addEventListener('click', () => getImages(`https://api.unsplash.com/search/photos?query=${inputValue}&page=${currentPage}&per_page=${perPage}&client_id=${apiKey}`));
searchInput.addEventListener('keyup', searchImages);
