let track_art = document.querySelector(".track-art-pause");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
let preloader = document.querySelector(".preloader");

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
let playlist13 = document.querySelector(".playlist13");
let playlist14 = document.querySelector(".playlist14");
let playlist15 = document.querySelector(".playlist15");
let playlist16 = document.querySelector(".playlist16");
let playlist17 = document.querySelector(".playlist17");
let playlist18 = document.querySelector(".playlist18");
let playlist19 = document.querySelector(".playlist19");
let playlist20 = document.querySelector(".playlist20");
let playlist21 = document.querySelector(".playlist21");
let playlist22 = document.querySelector(".playlist22");
let playlist23 = document.querySelector(".playlist23");
let playlist24 = document.querySelector(".playlist24");
let playlist25 = document.querySelector(".playlist25");
let playlist26 = document.querySelector(".playlist26");
let playlist27 = document.querySelector(".playlist27");
let playlist28 = document.querySelector(".playlist28");
let playlist29 = document.querySelector(".playlist29");
let playlist30 = document.querySelector(".playlist30");
let playlist31 = document.querySelector(".playlist31");

setTimeout(() => {
  preloader.style.display = "none";
}, 1000);

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
  {
    name: "Khamoshiyan",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Khamoshiyan.mp3",
  },
  {
    name: "Saware",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Saware.mp3",
  },
  {
    name: "Phir Bhi Tumko Chaahunga",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Phir Bhi Tumko Chaahunga.mp3",
  },
  {
    name: "Main Hoon Saath Tere",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Main Hoon Saath Tere.mp3",
  },
  {
    name: "Roke na Ruke Naina",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Roke-Na-Ruke-Naina.mp3",
  },
  {
    name: "Dekha Hazaro Dafaa",
    artist: "Arijit Singh, Palak Muchhal",
    image: "https://www.pagalworld.us/_big/rustom-2016-250.jpg",
    path: "Musics/Dekha Hazaro Dafaa.mp3",
  },
  {
    name: "Soch Na Sake",
    artist: "Arijit Singh, Tulsi Kumar",
    image: "https://www.pagalworld.us/_big/airlift-2016-250.jpg",
    path: "Musics/Soch Na Sake.mp3",
  },
  {
    name: "Janam Janam",
    artist: "Arijit Singh, Antara Mitra",
    image: "https://www.pagalworld.us/_big/dilwale-2015-250.jpg",
    path: "Musics/Janam Janam.mp3",
  },
  {
    name: "Lo Maan Liya",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Lo Maan Liya.mp3",
  },
  {
    name: "Ae Dil Hai Mushkil",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Ae Dil Hai Mushkil.mp3",
  },
  {
    name: "Zaalima",
    artist: "Arijit Singh, Harshdeep Kaur",
    image: "https://www.pagalworld.us/_big/raees-2017-250.jpg",
    path: "Musics/Zaalima.mp3",
  },
  {
    name: "Hamdard",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Hamdard.mp3",
  },
  {
    name: "Wafa Ne Bewafai",
    artist: "Arijit Singh, Neeti Mohan, Suzanne DMello",
    image: "https://www.pagalworld.us/_big/teraa-surroor-2016-250.jpg",
    path: "Musics/Wafa Ne Bewafai.mp3",
  },
  {
    name: "Chahun Main Ya Naa",
    artist: "Arijit Singh, Palak Muchhal",
    image: "https://www.pagalworld.us/_big/aashiqui-2-2013-250.jpg",
    path: "Musics/Chahun Main Ya Naa.mp3",
  },
  {
    name: "Aashiqui Aa Gayi",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Aashiqui Aa Gayi.mp3",
  },
  {
    name: "Mere Yaaraa",
    artist: "Arijit Singh, Neeti Mohan",
    image: "https://pagalworld.com.se/siteuploads/thumb/sft9/4180_4.jpg",
    path: "Musics/Mere Yaaraa.mp3",
  },
  {
    name: "Jaan Nisaar",
    artist: "Arijit Singh",
    image: "https://www.okeasylife.com/wp-content/uploads/2020/03/arijit-singh.jpg",
    path: "Musics/Jaan Nisaar.mp3",
  },
  {
    name: "Ami Je Tomar",
    artist: "Arijit Singh",
    image: "https://www.pagalvvorld.com/wp-content/uploads/2022/05/Ami-Je-Tomar-Bhool-Bhulaiyaa-2-mp3-image-300x300.jpg",
    path: "Musics/Ami-Je-Tomar.mp3",
  },
  {
    name: "Makhmali",
    artist: "Arijit Singh, Shreya Ghosal",
    image:
      "https://www.pagalworld.pw/GpE34Kg9Gq/113645/149620-makhmali-arijit-singh-mp3-song-300.jpg",
    path: "Musics/Makhmali.mp3",
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
  document.querySelector(".track-art-pause").className = "track-art-play";
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  document.querySelector(".track-art-play").className = "track-art-pause";
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
playlist13.addEventListener('click', function(){
  track_index = 12;
  loadTrack(track_index);
  playTrack();
})
playlist14.addEventListener('click', function(){
  track_index = 13;
  loadTrack(track_index);
  playTrack();
})
playlist15.addEventListener('click', function(){
  track_index = 14;
  loadTrack(track_index);
  playTrack();
})
playlist16.addEventListener('click', function(){
  track_index = 15;
  loadTrack(track_index);
  playTrack();
})
playlist17.addEventListener('click', function(){
  track_index = 16;
  loadTrack(track_index);
  playTrack();
})
playlist18.addEventListener('click', function(){
  track_index = 17;
  loadTrack(track_index);
  playTrack();
})
playlist19.addEventListener('click', function(){
  track_index = 18;
  loadTrack(track_index);
  playTrack();
})
playlist20.addEventListener('click', function(){
  track_index = 19;
  loadTrack(track_index);
  playTrack();
})
playlist21.addEventListener('click', function(){
  track_index = 20;
  loadTrack(track_index);
  playTrack();
})
playlist22.addEventListener('click', function(){
  track_index = 21;
  loadTrack(track_index);
  playTrack();
})
playlist23.addEventListener('click', function(){
  track_index = 22;
  loadTrack(track_index);
  playTrack();
})
playlist24.addEventListener('click', function(){
  track_index = 23;
  loadTrack(track_index);
  playTrack();
})
playlist25.addEventListener('click', function(){
  track_index = 24;
  loadTrack(track_index);
  playTrack();
})
playlist26.addEventListener('click', function(){
  track_index = 25;
  loadTrack(track_index);
  playTrack();
})
playlist27.addEventListener('click', function(){
  track_index = 26;
  loadTrack(track_index);
  playTrack();
})
playlist28.addEventListener('click', function(){
  track_index = 27;
  loadTrack(track_index);
  playTrack();
})
playlist29.addEventListener('click', function(){
  track_index = 28;
  loadTrack(track_index);
  playTrack();
})
playlist30.addEventListener('click', function(){
  track_index = 29;
  loadTrack(track_index);
  playTrack();
})
playlist31.addEventListener('click', function(){
  track_index = 30;
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
