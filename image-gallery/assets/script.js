const imagesBlock = document.querySelector('.images');
const loadMoreBtn = document.querySelector('.load-more');
const searchInput = document.querySelector('.search-input');
const modalBlock = document.querySelector('.modal-block');
const modalClose = document.querySelector('.mw-close');
const modalDownload = document.querySelector('.mw-download');
const apiKey = '3IDd65DtUkHcD7WW4Aj4kQbHDiLF6bAie9aDTHhDT1Q';
const perPage = 15;
let currentPage = 1;
let inputValue = null;
const url = `https://api.unsplash.com/search/photos?query=pictures&page=${currentPage}&per_page=${perPage}&client_id=${apiKey}`;
let state = [];
//get images
const getImages = async (url) => {
    loadMoreBtn.textContent = 'Loading...';
    loadMoreBtn.classList.add('disabled');
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if(response.ok && data.results.length) {
            state = data.results;
            loadMoreBtn.textContent = 'Show me more';
            loadMoreBtn.classList.remove ('disabled');
            setImages();
        }
    } catch (err) {
        alert('Error.json');
    }
};
//set images
const setImages = (images) => {
    imagesBlock.innerHTML += state.map(img =>
        `<li class="card" onclick="openModalBlock('${img.user.name}', '${img.urls.regular}')">
            <img src="${img.urls.regular}" alt="photo">
                <div class="info">
                    <div class="author">
                        <span class="material-symbols-outlined">photo_camera</span>
                        <p>${img.user.name}</p>
                    </div>
                    <button onclick="download('${img.urls.raw}');event.stopPropagation();">
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
// download
const download = async (urlImg) => {
    try {
        const response = await fetch(urlImg);
        const file = await response.blob();
        if(response.ok && file.size) {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(file);
            a.download = new Date().getTime();
            a.click();
        }
    } catch (err) {
        alert('Error.blob');
    }
};
//open modal window on click
const openModalBlock = (name, img) => {
    modalBlock.querySelector('img').src = img;
    modalBlock.querySelector('p').textContent = name;
    modalDownload.setAttribute('data-img', img);
    modalBlock.classList.add('show');
};
//close modall
const closeModalWindow = () => {
    modalBlock.classList.remove('show');
}
//run
getImages(url);
//load btns event
loadMoreBtn.addEventListener('click', loadMore);
searchInput.addEventListener('keyup', searchImages);
document.addEventListener('keyup', (e) => {
    if(e.key === 'Escape') {
        closeModalWindow();
    }
});
modalClose.addEventListener('click', closeModalWindow);
modalDownload.addEventListener('click', (e) => {
    download(e.target.dataset.img);
});