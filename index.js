let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
let playlist1 = document.querySelector(".playlist1");
let playlist2 = document.querySelector(".playlist2");
let playlist3 = document.querySelector(".playlist3");
let playlist4 = document.querySelector(".playlist4");
let playlist5 = document.querySelector(".playlist5");
let playlist6 = document.querySelector(".playlist6");
let playlist7 = document.querySelector(".playlist7");
let playlist8 = document.querySelector(".playlist8");
let playlist9 = document.querySelector(".playlist9");
let playlist10 = document.querySelector(".playlist10");
let playlist11 = document.querySelector(".playlist11");
let playlist12 = document.querySelector(".playlist12");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');

let track_list = [
  {
    name: "Tum Hi Ho",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Tum-Hi-Ho.mp3",
  },
  {
    name: "Chhod Diya",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Chhod-Diya---Baazaar(PagalWorld).mp3",
  },
  {
    name: "Dhokha Dhadi",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Dhokha Dhadi.mp3",
  },
  {
    name: "Manwa Laage",
    artist: "Arijit Singh, Shreya Ghoshal",
    image: "https://www.pagalworld.us/_big/happy-new-year-2014-250.jpg",
    path: "Musics/Manwa Laage.mp3",
  },
  {
    name: "Laal Ishq",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Laal Ishq.mp3",
  },
  {
    name: "Dua Karo",
    artist: "Arijit Singh, Bohemia",
    image: "https://www.pagalworld.us/_big/street-dancer-3d-2020-250.jpg",
    path: "Musics/Dua Karo.mp3",
  },
  {
    name: "Kashmir Main Tu Kanyakumari",
    artist: "Arijit Singh, Sunidhi Chauhan, Neeti Mohan",
    image: "https://www.pagalworld.us/_big/chennai-express-2013-250.jpg",
    path: "Musics/Kashmir Main Tu Kanyakumari.mp3",
  },
  {
    name: "Chhapaak",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Chhapaak.mp3",
  },
  {
    name: "Raabta",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Raabta.mp3",
  },
  {
    name: "Hawayein",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Hawayein.mp3",
  },
  {
    name: "Chunar",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Chunar.mp3",
  },
  {
    name: "Haareya",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Haareya.mp3",
  },
];

function random_bg_color() {

  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}


loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

playlist1.addEventListener('click', function(){
  track_index = 0;
  loadTrack(track_index);
  playTrack();
})
playlist2.addEventListener('click', function(){
  track_index = 1;
  loadTrack(track_index);
  playTrack();
})
playlist3.addEventListener('click', function(){
  track_index = 2;
  loadTrack(track_index);
  playTrack();
})
playlist4.addEventListener('click', function(){
  track_index = 3;
  loadTrack(track_index);
  playTrack();
})
playlist5.addEventListener('click', function(){
  track_index = 4;
  loadTrack(track_index);
  playTrack();
})
playlist6.addEventListener('click', function(){
  track_index = 5;
  loadTrack(track_index);
  playTrack();
})
playlist7.addEventListener('click', function(){
  track_index = 6;
  loadTrack(track_index);
  playTrack();
})
playlist8.addEventListener('click', function(){
  track_index = 7;
  loadTrack(track_index);
  playTrack();
})
playlist9.addEventListener('click', function(){
  track_index = 8;
  loadTrack(track_index);
  playTrack();
})
playlist10.addEventListener('click', function(){
  track_index = 9;
  loadTrack(track_index);
  playTrack();
})
playlist11.addEventListener('click', function(){
  track_index = 10;
  loadTrack(track_index);
  playTrack();
})
playlist12.addEventListener('click', function(){
  track_index = 11;
  loadTrack(track_index);
  playTrack();
})

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
