console.log('start');
const apiKey = '3IDd65DtUkHcD7WW4Aj4kQbHDiLF6bAie9aDTHhDT1Q';
const perPage = 15;
let currentPage = 1;
const getImages = async () => {
    const url = `https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=${apiKey}`;
    const data = await fetch(url);

    console.log(data);
}
// getImages();