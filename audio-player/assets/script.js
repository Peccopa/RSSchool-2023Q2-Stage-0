//variables
const player = document.querySelector('.player'),
trackArtist = player.querySelector('.artist'),
trackName = player.querySelector('.name'),
trackAudio = player.querySelector('.audio'),
trackImage = player.querySelector('.image'),
playPauseBtn = player.querySelector('.play-pause'),
playPauseView = playPauseBtn.querySelector('span'),
prevBtn = player.querySelector('#prev'),
nextBtn = player.querySelector('#next');
progressBar = player.querySelector('.progress-bar');
//trackindex
let trackIndex = 0;
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
    trackIndex++;
    trackIndex > playlist.length - 1 ? trackIndex = 0 : true;
    loadTracks(trackIndex);
    playTrack();
};
//prev track
function prevTrack () {
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