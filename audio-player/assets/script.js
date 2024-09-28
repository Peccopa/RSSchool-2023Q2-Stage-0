//variables
const player = document.querySelector('.player'),
  tagUl = player.querySelector('ul'), //;
  trackList = player.querySelector('.playlist'),
  trackListOpen = player.querySelector('#open_list'),
  trackListClose = player.querySelector('#close'),
  trackArtist = player.querySelector('.artist'),
  trackName = player.querySelector('.name'),
  trackAudio = player.querySelector('.audio'),
  trackImage = player.querySelector('.image'),
  layer = player.querySelector('.layer'),
  playPauseBtn = player.querySelector('.play-pause'),
  playPauseView = playPauseBtn.querySelector('span'),
  prevBtn = player.querySelector('#prev'),
  nextBtn = player.querySelector('#next'),
  volumeOffBtn = player.querySelector('#volume_off'),
  volumeOnBtn = player.querySelector('#volume_on'),
  volumeBar = player.querySelector('.volume-bar'),
  volumeArea = player.querySelector('.volume-area'),
  progressBar = player.querySelector('.progress-bar'),
  progressArea = player.querySelector('.progress-area'),
  repeatBtn = player.querySelector('#repeat_list'),
  topBar = player.querySelector('.top-bar');
//trackindex
let trackIndex = 0;
//load track
window.addEventListener('load', () => {
  loadTracks(trackIndex);
  playingNow();
});

function loadTracks(indexNumber) {
  trackArtist.textContent = playlist[indexNumber].artist;
  trackName.textContent = playlist[indexNumber].name;
  trackAudio.src = playlist[indexNumber].src;
  trackImage.src = `./assets/playlist/img/${playlist[indexNumber].img}.png`;
}
//play track
function playTrack() {
  layer.style.opacity = 1;
  playPauseView.innerText = 'pause';
  player.classList.add('paused');
  trackAudio.play();
  playingNow();
}
//pause track
function pauseTrack() {
  layer.style.opacity = 0;
  playPauseView.innerText = 'play_arrow';
  player.classList.remove('paused');
  trackAudio.pause();
}
//next track
function nextTrack() {
  progressBar.style.width = 0;
  trackIndex++;
  trackIndex > playlist.length - 1 ? (trackIndex = 0) : true;
  loadTracks(trackIndex);
  playTrack();
}
//prev track
function prevTrack() {
  progressBar.style.width = 0;
  trackIndex--;
  trackIndex < 0 ? (trackIndex = playlist.length - 1) : true;
  loadTracks(trackIndex);
  playTrack();
}
//play or not bnt
playPauseBtn.addEventListener('click', () => {
  const isTrackPaused = player.classList.contains('paused');
  isTrackPaused ? pauseTrack() : playTrack();
  // playingNow();
});
//next track
nextBtn.addEventListener('click', () => {
  nextTrack();
  // playingNow();
});
//prev track
prevBtn.addEventListener('click', () => {
  prevTrack();
  // playingNow();
});
//progress bar
trackAudio.addEventListener('timeupdate', (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;
  if (duration < 10 && progressWidth < 100) {
    progressBar.style.width = `${progressWidth + 7.5}%`;
  }
  trackAudio.addEventListener('loadeddata', () => {
    //total time
    let totalMin = Math.floor(trackAudio.duration / 60);
    let totalSec = Math.floor(trackAudio.duration % 60);
    totalSec < 10 ? (totalSec = `0${totalSec}`) : false;
    player.querySelector(
      '.bar-duration'
    ).textContent = `${totalMin}:${totalSec}`;
  });
  //current time
  let currentMin = Math.floor(trackAudio.currentTime / 60);
  let currentSec = Math.floor(trackAudio.currentTime % 60);
  currentSec < 10 ? (currentSec = `0${currentSec}`) : false;
  player.querySelector(
    '.bar-current'
  ).textContent = `${currentMin}:${currentSec}`;
});
//progress bar click
function checkProgress(mouseClick) {
  trackAudio.currentTime =
    (mouseClick.offsetX / progressArea.clientWidth) * trackAudio.duration;
  playTrack();
}
progressArea.addEventListener('mousedown', (mouseClick) => {
  checkProgress(mouseClick);
  progressArea.addEventListener('mousemove', checkProgress);
});
//volume butns
volumeOffBtn.addEventListener('click', () => {
  volumeBar.style.width = 0 + 'px';
  trackAudio.volume = 0;
  volumeOffBtn.style.opacity = '.3';
  volumeOnBtn.style.opacity = '1';
});
volumeOnBtn.addEventListener('click', () => {
  volumeBar.style.width = volumeArea.clientWidth + 'px';
  trackAudio.volume = 1;
  volumeOnBtn.style.opacity = '.3';
  volumeOffBtn.style.opacity = '1';
});

// volume bar move
function checkVolume(mouseClick) {
  if (mouseClick.offsetX >= 133) {
    trackAudio.volume = 1;
    volumeBar.style.width = 140 + 'px';
    volumeOnBtn.style.opacity = '0.3';
    volumeOffBtn.style.opacity = '1';
  } else if (mouseClick.offsetX <= 7) {
    trackAudio.volume = 0;
    volumeBar.style.width = 0 + 'px';
    volumeOnBtn.style.opacity = '1';
    volumeOffBtn.style.opacity = '0.3';
  } else {
    trackAudio.volume = Number(
      mouseClick.offsetX / volumeArea.clientWidth
    ).toFixed(1);
    volumeBar.style.width = volumeArea.clientWidth * trackAudio.volume + 'px';
    volumeOnBtn.style.opacity = '1';
    volumeOffBtn.style.opacity = '1';
  }
}

volumeArea.addEventListener('mousedown', (mouseClick) => {
  checkVolume(mouseClick);
  volumeArea.addEventListener('mousemove', checkVolume);
});

document.addEventListener('mouseup', () => {
  volumeArea.removeEventListener('mousemove', checkVolume);
  progressArea.removeEventListener('mousemove', checkProgress);
});

//click on image
trackImage.addEventListener('click', () => {
  const isTrackPaused = player.classList.contains('paused');
  isTrackPaused ? pauseTrack() : playTrack();
});

//click on repeat btn
repeatBtn.addEventListener('click', () => {
  let getTextRepeat = repeatBtn.textContent;
  switch (getTextRepeat) {
    case 'repeat':
      repeatBtn.textContent = 'repeat_one';
      repeatBtn.title = 'Track looped';
      break;
    case 'repeat_one':
      repeatBtn.textContent = 'shuffle';
      repeatBtn.title = 'Playback shuffle';
      break;
    case 'shuffle':
      repeatBtn.textContent = 'repeat';
      repeatBtn.title = 'Playlist looped';
      break;
  }
});

//track ended
trackAudio.addEventListener('ended', () => {
  let getTextRepeat = repeatBtn.textContent;
  switch (getTextRepeat) {
    case 'repeat':
      nextTrack();
      break;
    case 'repeat_one':
      trackAudio.currentTime = 0;
      loadTracks(trackIndex);
      playTrack();
      break;
    case 'shuffle':
      let random = Math.floor(Math.random() * playlist.length);
      do {
        random = Math.floor(Math.random() * playlist.length);
      } while (trackIndex === random);
      trackIndex = random;
      loadTracks(trackIndex);
      playTrack();
      playingNow();
      break;
  }
});

//open tracklist
trackListOpen.addEventListener('click', () => {
  trackList.classList.toggle('open');
});
trackListClose.addEventListener('click', () => {
  trackList.classList.toggle('open');
});

//create playlist
function createPlaylist(playlistArray) {
  for (let i = 0; i < playlistArray.length; i++) {
    let tagLi = `<li li-index="${i}">
        <div class="pl-row">
        <p class="pl-artist">${playlistArray[i].name}</p>
        <p class="pl-name">${playlistArray[i].artist}</p>
        </div>
        <audio class="track-${i}" src="${playlistArray[i].src}"></audio>
        <span class="duration" id="track-${i}">00:00</span>
        </li>
        <div class="pl-border"></div>`;
    tagUl.insertAdjacentHTML('beforeend', tagLi);
    //get duration
    let trackLiTag = tagUl.querySelector(`.track-${i}`);
    let trackLiDuration = tagUl.querySelector(`#track-${i}`);
    trackLiTag.addEventListener('loadeddata', () => {
      let totalMin = Math.floor(trackLiTag.duration / 60);
      let totalSec = Math.floor(trackLiTag.duration % 60);
      totalSec < 10 ? (totalSec = `0${totalSec}`) : false;
      trackLiDuration.textContent = `${totalMin}:${totalSec}`;
      trackLiDuration.setAttribute('t-duration', `${totalMin}:${totalSec}`);
    });
  }
}

createPlaylist(playlist);

//add active playlist
let allTagsLi = tagUl.querySelectorAll('li');
function playingNow() {
  for (let i = 0; i < allTagsLi.length; i++) {
    let audioTag = allTagsLi[i].querySelector('.duration');
    if (allTagsLi[i].classList.contains('playing')) {
      allTagsLi[i].classList.remove('playing');
      let addDuration = audioTag.getAttribute('t-duration');
      audioTag.textContent = addDuration;
    }
    if (allTagsLi[i].getAttribute('li-index') == trackIndex) {
      allTagsLi[i].classList.add('playing');
      audioTag.textContent = 'Playing';
    }
    allTagsLi[i].setAttribute('onclick', 'clicked(this)');
  }
}

function clicked(e) {
  let getLiIndex = e.getAttribute('li-index');
  trackIndex = getLiIndex;
  loadTracks(trackIndex);
  playTrack();
  playingNow();
}

// add audio files
document.querySelector('.input-add-file').addEventListener('change', (e) => {
  const files = e.target.files;
  const countFiles = files.length;
  if (!countFiles) {
    alert('Файл не выбран!');
    return;
  }
  const selectedFile = files[0];
  if (!/^audio/.test(selectedFile.type)) {
    alert('Выбранный файл не является звуковым файлом!');
    return;
  }
  const reader = new FileReader();
  reader.readAsDataURL(selectedFile);
  reader.addEventListener('load', (e) => {
    const newTrack = {
      name: selectedFile.name.split('.')[0],
      // artist: 'Unknown',
      artist: '',
      img: 'default',
      src: `${e.target.result}`,
    };
    playlist.push(newTrack);
    document.querySelector('.playlist ul').innerHTML = '';
    createPlaylist(playlist);
    allTagsLi = tagUl.querySelectorAll('li');
    playingNow();
  });
});

console.log(`
**Требования:**

- вёрстка аудиоплеера: есть кнопка Play/Pause, кнопки "Вперёд" и "Назад" для пролистывания аудиотреков, прогресс-бар, отображается название и автор трека **+5**
- в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс **+5**
- есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание аудиотрека **+5**
- внешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент аудиотрек **+5**
- При кликах по кнопкам "Вперёд" и "Назад" переключается проигрываемый аудиотрек. Аудиотреки пролистываются по кругу - после последнего идёт первый **+10**
- При смене аудиотрека меняется изображение - обложка аудиотрека **+10**
- Прогресс-бар отображает прогресс проигрывания текущего аудиотрека. При перемещении ползунка вручную меняется текущее время проигрывания аудиотрека **+10**
- Отображается продолжительность аудиотрека и его текущее время проигрывания **+10**
- Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения **+10** (высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо)

**Оценка за задание - 70 баллов**
`);
