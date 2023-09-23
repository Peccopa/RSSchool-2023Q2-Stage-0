//variables
const player = document.querySelector('.player'),
tagUl = player.querySelector('ul');
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
repeatBtn = player.querySelector('#repeat_list');
console.log(trackList);
//trackindex
let trackIndex = 0;
// let progressWidth = 0;
//load track
window.addEventListener('load', () => {
    loadTracks(trackIndex);
});

function loadTracks(trackIndex) {
    trackArtist.textContent = playlist[trackIndex].artist;
    trackName.textContent = playlist[trackIndex].name;
    trackAudio.src = `./assets/playlist/audio/${playlist[trackIndex].img}.mp3`;
    trackImage.src = `./assets/playlist/img/${playlist[trackIndex].img}.png`;
};
//play track
function playTrack () {
    // progressBar.style.transition = 'all .5s linear';
    progressBar.style.width = 0;
    layer.style.opacity = 1;
    playPauseView.innerText = 'pause';
    player.classList.add('paused');
    trackAudio.play();
}
//pause track
function pauseTrack () {
    layer.style.opacity = 0;
    playPauseView.innerText = 'play_arrow';
    player.classList.remove('paused');
    trackAudio.pause();
}
//next track
function nextTrack () {
    // progressBar.style.transition = '0s';
    // progressBar.style.width = 0;
    trackIndex++;
    trackIndex > playlist.length - 1 ? trackIndex = 0 : true;
    loadTracks(trackIndex);
    playTrack();
};
//prev track
function prevTrack () {
    // progressBar.style.transition = '0s';
    // progressBar.style.width = 0;
    trackIndex--;
    trackIndex < 0 ? trackIndex = playlist.length - 1 : true;
    loadTracks(trackIndex);
    playTrack();
};
//play or not bnt
playPauseBtn.addEventListener('click', () => {
    const isTrackPaused = player.classList.contains('paused');
    isTrackPaused ? pauseTrack() : playTrack();
});
//next track
nextBtn.addEventListener('click', () => {
    // setTimeout(nextTrack, 5000);
    // document.documentElement.style.cssText = "--bar-color: blue";
    nextTrack();
});
//prev track
prevBtn.addEventListener('click', () => {
    // document.documentElement.style.cssText = "--btn-color: red";
    prevTrack();
});
//progress bar
trackAudio.addEventListener('timeupdate', (e) => {
    const currentTime = (e.target.currentTime);
    const duration = (e.target.duration);
    let progressWidth = ((currentTime)/ duration) * 100;
    progressBar.style.width = `${progressWidth}%`;
    if (duration < 10) {
        progressBar.style.width = `${progressWidth + 7.5}%`;

    };
    // console.log(progressWidth);


    trackAudio.addEventListener('loadeddata', () => {
        //total time
        let totalMin = Math.floor((trackAudio.duration) / 60);
        let totalSec = Math.floor((trackAudio.duration) % 60);
        totalSec < 10 ? totalSec = `0${totalSec}` : false;
        player.querySelector('.bar-duration').textContent = `${totalMin}:${totalSec}`;
    });
    //current time
    let currentMin = Math.floor((trackAudio.currentTime) / 60);
    let currentSec = Math.floor((trackAudio.currentTime) % 60);
    currentSec < 10 ? currentSec = `0${currentSec}` : false;
    player.querySelector('.bar-current').textContent = `${currentMin}:${currentSec}`;
});
//progress bar click
progressArea.addEventListener('click', (mouseClick) => {
    trackAudio.currentTime = mouseClick.offsetX / progressArea.clientWidth * trackAudio.duration;
    playTrack();
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
//volume bar click
volumeArea.addEventListener('click', (mouseClick) => {
    trackAudio.volume = (Math.ceil((mouseClick.offsetX / volumeArea.clientWidth) * 10) / 10);
    volumeBar.style.width = mouseClick.offsetX + 'px';
    volumeOffBtn.style.opacity = '1';
    volumeOnBtn.style.opacity = '1';
});
//click on image
trackImage.addEventListener('click', () => {
    const isTrackPaused = player.classList.contains('paused');
    isTrackPaused ? pauseTrack() : playTrack();
});
//click on repeat btn
repeatBtn.addEventListener('click', () => {
    let getTextRepeat = repeatBtn.textContent;
    switch(getTextRepeat) {
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
    };
});
//track ended
trackAudio.addEventListener('ended', () => {
    let getTextRepeat = repeatBtn.textContent;
    switch(getTextRepeat) {
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
            break;
    };
});
// console.log(Math.floor(Math.random() * playlist.length))
// console.log(playlist.length);
//open tracklist
trackListOpen.addEventListener('click', () => {
    trackList.classList.toggle('open');
});
trackListClose.addEventListener('click', () => {
    trackList.classList.toggle('open');
});
//create playlist
for (let i = 0; i < playlist.length; i++) {
    let tagLi = `<li>
                    <div class="pl-row">
                        <span>${playlist[i].name}</span>
                        <p>${playlist[i].artist}</p>
                    </div>
                    <span class="duration">2:45</span>
                </li>`;
    tagUl.insertAdjacentHTML('beforeend', tagLi);
}