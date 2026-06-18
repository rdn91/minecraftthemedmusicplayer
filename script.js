const tracklist = [
  {
    name: "Sweden (C418)",
    audioSrc: "audio/c418_sweden.mp3",
    discImageSrc: "images/disc_sweden_exposed.png" // The green record (Background track)
  },
  {
    name: "Cat (C418)",
    audioSrc: "audio/c418_cat.mp3",
    discImageSrc: "images/disc_cat_exposed.png" // Green center
  },
  {
    name: "13 (C418)",
    audioSrc: "audio/c418_13.mp3",
    discImageSrc: "images/disc_13_exposed.png" // White and yellow center
  },
  {
    name: "Blocks (C418)",
    audioSrc: "audio/c418_blocks.mp3",
    discImageSrc: "images/disc_blocks_exposed.png" // Red center
  },
  {
    name: "Chirp (C418)",
    audioSrc: "audio/c418_chirp.mp3",
    discImageSrc: "images/disc_chirp_exposed.png" // Dark red/maroon center
  },
  {
    name: "Far (C418)",
    audioSrc: "audio/c418_far.mp3",
    discImageSrc: "images/disc_far_exposed.png" // Light green center
  },
  {
    name: "Mall (C418)",
    audioSrc: "audio/c418_mall.mp3",
    discImageSrc: "images/disc_mall_exposed.png" // Dark blue center
  },
  {
    name: "Mellohi (C418)",
    audioSrc: "audio/c418_mellohi.mp3",
    discImageSrc: "images/disc_mellohi_exposed.png" // Purple and white borders
  },
  {
    name: "Stal (C418)",
    audioSrc: "audio/c418_stal.mp3",
    discImageSrc: "images/disc_stal_exposed.png" // Black/Dark grey center
  },
  {
    name: "Strad (C418)",
    audioSrc: "audio/c418_strad.mp3",
    discImageSrc: "images/disc_strad_exposed.png" // White center
  },
  {
    name: "Ward (C418)",
    audioSrc: "audio/c418_ward.mp3",
    discImageSrc: "images/disc_ward_exposed.png" // Dark green and mint borders
  },
  {
    name: "11 (C418)",
    audioSrc: "audio/c418_11.mp3",
    discImageSrc: "images/disc_11_exposed.png" // Cracked/shattered black disc
  },
  {
    name: "Wait (C418)",
    audioSrc: "audio/c418_wait.mp3",
    discImageSrc: "images/disc_wait_exposed.png" // Sky blue center
  },
  {
    name: "Pigstep (Lena Raine)",
    audioSrc: "audio/lena_raine_pigstep.mp3",
    discImageSrc: "images/disc_pigstep_exposed.png" // Full red colored vinyl
  },
  {
    name: "Otherside (Lena Raine)",
    audioSrc: "audio/lena_raine_otherside.mp3",
    discImageSrc: "images/disc_otherside_exposed.png" // Deep blue vinyl with a green border
  },
  {
    name: "5 (Samuel Åberg)",
    audioSrc: "audio/samuel_aberg_5.mp3",
    discImageSrc: "images/disc_5_exposed.png" // Reassembled dark grey fragments
  },
  {
    name: "Relic (Aaron Cherof)",
    audioSrc: "audio/aaron_cherof_relic.mp3",
    discImageSrc: "images/disc_relic_exposed.png" // Dark brown and turquoise vinyl
  },
  {
    name: "Precipice (Aaron Cherof)",
    audioSrc: "audio/aaron_cherof_precipice.mp3",
    discImageSrc: "images/disc_precipice_exposed.png" // Multi-colored grey, green, and orange border
  },
  {
    name: "Creator (Lena Raine)",
    audioSrc: "audio/lena_raine_creator.mp3",
    discImageSrc: "images/disc_creator_exposed.png" // Vibrant full green vinyl
  },
  {
    name: "Creator - Music Box Version (Lena Raine)",
    audioSrc: "audio/lena_raine_creator_music_box.mp3",
    discImageSrc: "images/disc_creator_music_box_exposed.png" // Full orange colored vinyl
  }
];
let currentTrackIndex = 0;
let isPlaying = false;
document.getElementById()
