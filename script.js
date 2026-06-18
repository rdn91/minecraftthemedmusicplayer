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
  },
  {
    name: "Tears (Amos Roddy)",
    audioSrc: "audio/amos_roddy_tears.mp3"
  },
  {
    name: "Lava Chicken (Hyper Potions)",
    audioSrc: "audio/hyper_potions_lava_chicken.mp3"
  },
  {
    name: "Bounce (fingerspit)",
    audioSrc: "audio/fingerspit_bounce.mp3"
  }
];


let currentTrackIndex = 0;
let isPlaying = false;
const slider = document.getElementById("slider")
const prevbutton = document.getElementById("prev-button");
const playbutton = document.getElementById("play-button");
const nextbutton = document.getElementById("next-button");
const trackTitleDisplay = document.querySelector(".now-playing");
const audioPlayer = document.querySelector("audio");
const currentTrackDuration = document.querySelector(".duration")
function load_track(index) {
  const currentTrack = tracklist[index];
  audioPlayer.src = currentTrack.audioSrc;
  trackTitleDisplay.innerText = "Now Playing: " + currentTrack.name;
}

function togglePlay() {

  if (isPlaying) {
    audioPlayer.pause();
    isPlaying = false;
    playbutton.innerText = "▶"
  }
  else {
    audioPlayer.play();
    isPlaying = true;
    playbutton.innerText = "❚❚"
  }
}


function nextSong() {
  if (currentTrackIndex == 22) {
    currentTrackIndex = 0
  }
  else {
    currentTrackIndex += 1
  }
  load_track(currentTrackIndex);
  if (isPlaying) {
    audioPlayer.play();
  }
}


function prevSong() {
  if (currentTrackIndex == 0) {
    currentTrackIndex = 22;
  }
  else {
    currentTrackIndex -= 1;
  }

  load_track(currentTrackIndex);

  if (isPlaying) {
    audioPlayer.play();
    }
}

playbutton.addEventListener("click", togglePlay);
nextbutton.addEventListener("click", nextSong);
prevbutton.addEventListener("click", prevSong);

audioPlayer.addEventListener("loadedmetadata", () => {
  slider.max = audioPlayer.duration;

  let minutes = Math.floor(audioPlayer.duration / 60);
  let seconds = Math.floor(audioPlayer.duration % 60);
  if (seconds < 10) seconds = "0" + seconds; 
  
  currentTrackDuration.innerText = minutes + ":" + seconds;
});

audioPlayer.addEventListener("timeupdate", () => {
  slider.value = audioPlayer.currentTime;
});

slider.addEventListener("input", () => {
  audioPlayer.currentTime = slider.value;
});

audioPlayer.addEventListener("ended", nextSong);

load_track(currentTrackIndex);

