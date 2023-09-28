const imagesBlock = document.querySelector('.images');
const loadMoreBtn = document.querySelector('.load-more');
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');
const modalBlock = document.querySelector('.modal-block');
const modalClose = document.querySelector('.mw-close');
const modalDownload = document.querySelector('.mw-download');
const apiKey = '3IDd65DtUkHcD7WW4Aj4kQbHDiLF6bAie9aDTHhDT1Q';
const perPage = 30;
let currentPage = 1;
let inputValue = 'purple lights';
const url = `https://api.unsplash.com/search/photos?query=${inputValue}&page=${currentPage}&per_page=${perPage}&client_id=${apiKey}`;
let state = [];
//get images
const getImages = async (url) => {
    loadMoreBtn.textContent = 'Loading...';
    loadMoreBtn.classList.add('disabled');
    try {
        const response = await fetch(url);
        const data = await response.json();
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
// search mouse click
const searchMouseClick = () => {
    if(searchInput.value !== '') {
        currentPage = 1;
        inputValue = searchInput.value;
        imagesBlock.innerHTML = '';
        getImages(`https://api.unsplash.com/search/photos?query=${inputValue}&page=${currentPage}&per_page=${perPage}&client_id=${apiKey}`);
    }
};
//search images
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
    console.log(url);
    console.log(currentPage);
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
searchIcon.addEventListener('click', searchMouseClick);
document.addEventListener('keyup', (e) => {
    if(e.key === 'Escape') {
        closeModalWindow();
    }
});
modalClose.addEventListener('click', closeModalWindow);
modalDownload.addEventListener('click', (e) => {
    download(e.target.dataset.img);
});

console.log(`
**Требования:**

- на странице есть несколько фото и строка поиска **+5**
- в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс **+5**
- При загрузке приложения на странице отображаются полученные от API изображения **+10**
- Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся изображения соответствующей тематики, если такие данные предоставляет API **+10**
- при открытии приложения курсор находится в поле ввода **+5**
- есть placeholder **+5**
- автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) **+5**
- поисковый запрос можно отправить нажатием клавиши Enter **+5**
- после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода **+5**
- в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder **+5**
- Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения **+10**

**Оценка за задание - 70 баллов**
`);