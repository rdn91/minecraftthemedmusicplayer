const tracklist = [
  {
    name: "Sweden (C418)",
    audioSrc: "audio/c418_sweden.mp3"
  },
  {
    name: "Cat (C418)",
    audioSrc: "audio/c418_cat.mp3"
  },
  {
    name: "13 (C418)",
    audioSrc: "audio/c418_13.mp3"
  },
  {
    name: "Blocks (C418)",
    audioSrc: "audio/c418_blocks.mp3"
  },
  {
    name: "Chirp (C418)",
    audioSrc: "audio/c418_chirp.mp3"
  },
  {
    name: "Far (C418)",
    audioSrc: "audio/c418_far.mp3"
  },
  {
    name: "Mall (C418)",
    audioSrc: "audio/c418_mall.mp3"
  },
  {
    name: "Mellohi (C418)",
    audioSrc: "audio/c418_mellohi.mp3"
  },
  {
    name: "Stal (C418)",
    audioSrc: "audio/c418_stal.mp3"
  },
  {
    name: "Strad (C418)",
    audioSrc: "audio/c418_strad.mp3"
  },
  {
    name: "Ward (C418)",
    audioSrc: "audio/c418_ward.mp3"
  },
  {
    name: "11 (C418)",
    audioSrc: "audio/c418_11.mp3"
  },
  {
    name: "Wait (C418)",
    audioSrc: "audio/c418_wait.mp3"
  },
  {
    name: "Pigstep (Lena Raine)",
    audioSrc: "audio/lena_raine_pigstep.mp3"
  },
  {
    name: "Otherside (Lena Raine)",
    audioSrc: "audio/lena_raine_otherside.mp3"
  },
  {
    name: "5 (Samuel Åberg)",
    audioSrc: "audio/samuel_aberg_5.mp3"
  },
  {
    name: "Relic (Aaron Cherof)",
    audioSrc: "audio/aaron_cherof_relic.mp3"
  },
  {
    name: "Precipice (Aaron Cherof)",
    audioSrc: "audio/aaron_cherof_precipice.mp3"
  },
  {
    name: "Creator (Lena Raine)",
    audioSrc: "audio/lena_raine_creator.mp3"
  },
  {
    name: "Creator - Music Box Version (Lena Raine)",
    audioSrc: "audio/lena_raine_creator_music_box.mp3"
  }
];


let currentTrackIndex = 0;
let isPlaying = false;

const prevbutton = document.getElementById("prev-button");
const playbutton = document.getElementById("play-button");
const nextbutton = document.getElementById("next-button");
const trackTitleDisplay = document.querySelector(".now-playing");
const audioPlayer = document.querySelector("audio");

function load_track(index) {
  const currentTrack = tracklist[index];
  audioPlayer.src = currentTrack.audioSrc;
  trackTitleDisplay.name = "Now Playing: " + currentTrack.name;
}
function togglePlay() {
  
}
function togglePause() {

}
function nextSong() {
  if currentTrackIndex == 19:
    currentTrackIndex = 0
  else:
    currentTrackIndex += 1
  load_track(currentTrackIndex);
}
function prevSong() {
  if currentTrackIndex == 0:
    currentTrack = 19;
  else:
    currentTrackIndex -= 1;
  
  load_track(currentTrackIndex);
}