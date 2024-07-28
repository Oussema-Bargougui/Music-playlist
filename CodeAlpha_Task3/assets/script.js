const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const nextTrackButton = document.getElementById('next-track');
const prevTrackButton = document.getElementById('prev-track');
const trackName = document.getElementById('track-name');
const artistName = document.getElementById('artist-name');

let currentTrack = 0;
let tracks = [
  { filename: 'track1.mp3', name: 'Track 1', artist: 'Artist 1' },
  { filename: 'track2.mp3', name: 'Track 2', artist: 'Artist 2' },
  { filename: 'track3.mp3', name: 'Track 3', artist: 'Artist 3' }
];

playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseButton.textContent = 'Play';
  }
});

nextTrackButton.addEventListener('click', () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  updateTrack();
});

prevTrackButton.addEventListener('click', () => {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  updateTrack();
});

function updateTrack() {
  audio.src = `assets/${tracks[currentTrack].filename}`;
  audio.play();
  trackName.textContent = tracks[currentTrack].name;
  artistName.textContent = tracks[currentTrack].artist;
}
updateTrack();