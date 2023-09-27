const imagesBlock = document.querySelector('.images');
const loadMoreBtn = document.querySelector('.load-more');
const searchInput = document.querySelector('.search-input');

const apiKey = '3IDd65DtUkHcD7WW4Aj4kQbHDiLF6bAie9aDTHhDT1Q';
const perPage = 15;
let currentPage = 1;
let inputValue = null;
const url = `https://api.unsplash.com/search/photos?query=pictures&page=${currentPage}&per_page=${perPage}&client_id=${apiKey}`;
// const url = `https://api.unsplash.com/search/photos?query=spring&per_page=${perPage}&orientation=landscape&client_id=${apiKey}`;
let state = [];
//test
// const urlTest = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=15`;
//get images
const getImages = async (url) => {
    // currentPage++;
    loadMoreBtn.textContent = 'Loading...';
    loadMoreBtn.classList.add('disabled');
    try {
        const response = await fetch(url);
        // console.log(response);
        const data = await response.json();
        console.log(data);
        if(response.ok && data.results.length) {
            state = data.results;
            loadMoreBtn.textContent = 'Show me more';
            loadMoreBtn.classList.remove ('disabled');
            setImages();
            // console.log('yeap');
        }
        // console.log('noup');
    } catch (err) {
        console.log(err);
    }
};
//set images
const setImages = (images) => {
    console.log(currentPage);
    imagesBlock.innerHTML += state.map(img =>
        `<li class="card"><img src="${img.urls.regular}" alt="photo">
            <div class="info">
                <div class="author">
                    <span class="material-symbols-outlined">photo_camera</span>
                    <p>${img.user.name}</p>
                </div>
                <button onclick="download('${img.urls.regular}')">
                    <span class="material-symbols-outlined">download</span>
                </button>
            </div>
        </li>`
    ).join('');
};
// search images
const searchImages = (e) => {
    if(e.key === 'Enter' && e.target.value !== '') {
        currentPage = 1;
        inputValue = e.target.value;
        imagesBlock.innerHTML = '';
        getImages(`https://api.unsplash.com/search/photos?query=${inputValue}&page=${currentPage}&per_page=${perPage}&client_id=${apiKey}`);
    }
};
//load more
const loadMore = () => {
    currentPage++;
    let url = `https://api.unsplash.com/search/photos?query=${inputValue}&page=${currentPage}&per_page=${perPage}&client_id=${apiKey}`;

    getImages(url);
}














let test = 'https://images.unsplash.com/photo-1497030947858-3f40f1508e84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDc2OTR8MHwxfHNlYXJjaHwxMnx8cGljdHVyZXN8ZW58MHx8fHwxNjk1ODExNDk4fDA&ixlib=rb-4.0.3&q=80&w=1080';

//download
const download = async (test) => {
        console.log(test);
        const response = await fetch(test);
        console.log(response);
        const data = await response.blob();
        console.log(data);
}

download(test);


















//run
getImages(url);
//load btns event
loadMoreBtn.addEventListener('click', loadMore);
searchInput.addEventListener('keyup', searchImages);