//variables
const player = document.querySelector('.player'),
trackArtist = player.querySelector('.artist'),
trackName = player.querySelector('.name'),
trackAudio = player.querySelector('.audio'),
trackImage = player.querySelector('.image'),
playPauseBtn = player.querySelector('.play-pause'),
playPauseView = playPauseBtn.querySelector('span'),
prevBtn = player.querySelector('#prev'),
nextBtn = player.querySelector('#next'),
volumeOffBtn = player.querySelector('#volume_off'),
volumeOnBtn = player.querySelector('#volume_on'),
volumeBar = player.querySelector('.volume-bar'),
volumeArea = player.querySelector('.volume-area'),
progressBar = player.querySelector('.progress-bar'),
progressArea = player.querySelector('.progress-area');
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
    playPauseView.innerText = 'pause';
    player.classList.add('paused');
    trackAudio.play();
}
//pause track
function pauseTrack () {
    playPauseView.innerText = 'play_arrow';
    player.classList.remove('paused');
    trackAudio.pause();
}
//next track
function nextTrack () {
    // progressBar.style.transition = '0s';
    progressBar.style.width = 0;
    trackIndex++;
    trackIndex > playlist.length - 1 ? trackIndex = 0 : true;
    loadTracks(trackIndex);
    playTrack();
};
//prev track
function prevTrack () {
    // progressBar.style.transition = '0s';
    progressBar.style.width = 0;
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
    nextTrack();
});
//prev track
prevBtn.addEventListener('click', () => {
    prevTrack();
});
//progress bar
trackAudio.addEventListener('timeupdate', (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;

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
