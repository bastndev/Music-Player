const title =       document.querySelector('.title');
const prev =        document.querySelector('.prev');
const playPause =   document.querySelector('.playPause');
const Next =        document.querySelector('.Next');
const audio =       document.querySelector('audio');
const volumen =     document.querySelector('.volumen')
// Song List

const songList = [
    {
        path:"/src/music/on1.mp3",
        songName:"Tik Tok Music 🎶",
    },
    {
        path:"/src/music/on2.mp3",
        songName:"Musica Andina ⛰️",
    },
    {
        path:"/src/music/on3.mp3",
        songName:"Musica Qatar 2022 🏆",
    },
    {
        path:"/src/music/on4.mp3",
        songName:"Mix Huayño 🎧",
    },
];

let song_Playing = false;

// Play Song
function playSong(){
    song_Playing = true;
    audio.play();
    playPause.classList.add('active');
    // pause Animation
    playPause.innerHTML = '<ion-icon name="pause-circle-outline"></ion-icon>'
}
// Pause Song
function pauseSong(){
    song_Playing = false;
    audio.pause();
    playPause.classList.remove('active');
    playPause.innerHTML = ' <ion-icon name="play-circle-outline"></ion-icon>'
}
// Play And Pause
playPause.addEventListener("click",()=>(song_Playing ?
    pauseSong(): playSong()));

//Load Song 
function loadSong(songList ){
    title.textContent = songList.songName;
    audio.src = songList.path
}

// Current song
let i = 0;

// on Load
loadSong(songList[i]);

// Preciys Song
function prevSong(){
    i--;
    if(i < 0){
        i = songList.length -1;
    }
    loadSong(songList[i]);
    playSong();
}
prev.addEventListener("click", prevSong);

// Next Song
function nextSong(){
    i++;
    if(i > songList.length -1){
        i = 0;
    }
    loadSong(songList[i]);
    playSong();
}
Next.addEventListener("click", nextSong);

// Volumen
volumen.addEventListener('click', function(){
    let volu=this.value
    audio.volume = volu
})

// Image Swap
image_array =[
    'do2.gif',
    'do3.gif',
    'do4.gif',
    'do5.gif',
    'do6.gif',
    'do7.gif',
    'do8.gif',
    'do9.gif',
    'do10.gif',
    'do11.gif',
    'do12.gif',
    'do13.gif',
    'do14.gif',
    'do15.gif',
    'do16.gif'
]

function get_radom_image(){
    random_index = Math.floor(Math.random()* image_array.length);

    selected_image = image_array[random_index]

    document.getElementById('image_shower').src = `src/img/${selected_image}`
}