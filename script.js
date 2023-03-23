let audio = document.querySelector('#audio');
let songs = document.querySelectorAll('.artist');

let slider = document.querySelector('#duration_slider');

let previous = document.querySelector('.previous-btn');
let next = document.querySelector('.next-btn');

let ratingStar = document.querySelector('.rating-star');

let artistName = document.querySelectorAll('#artist-name');
let songArtist = document.querySelector('#song-artist');
let songTheme = document.querySelector('#song-theme');
let songTitle = document.querySelector('#song-title');

let musicProgress = document.querySelector('.music-progress');
let play = document.querySelector('#play');

// list of  songs in an array
let allSongs = [
    {
        name : 'Somewhere in brooklyn',
        path : "songs/bruno_mars_somewhere_in_brooklyn.mp3",
        singer: 'Bruno Mars'
    },
    {
        name : 'I Dare You',
        path : 'songs/Kelly_Clarkson_I_Dare_You.mp3',
        singer: 'Kelly Clarkson'
    },
    {
        name : 'Fight Song',
        path : "songs/Fight Song_Rachel_Platten.mp3",
        singer: 'Rachel Platten'
    },
    {
        name : 'Watermelon Sugar',
        path : "songs/Harry_Styles_Watermelon_Sugar.mp3",
        singer: 'Harry Styles'
    },
    {
        name : 'If the world was ending',
        path : "songs/JP_Saxe_Julia_Michaels.mp3",
        singer: 'Julia Michael'
    },
    {
        name : 'Intentions',
        path : "songs/Justin_Bieber_Intentions_ft_Quavo.mp3",
        singer: 'Justin Beiber'
    },
    {
        name : 'Just Dance',
        path : "songs/Lady_Gaga_Just_Dance.mp3.mp3",
        singer: 'Lady Gaga'
    }
]

function reset_slider(){
    slider.value = 0;
}

//  creating a  audio file
let track = document.createElement('audio');


// getting info in the Array and setting the attributes

let i = 0;
function load_track(i) {
    reset_slider();
    track.src = allSongs[i].path;
    songArtist.innerHTML = allSongs[i].singer;
    songTheme.innerHTML = allSongs[i].name;
    timer = setInterval(range_slider,1000);

}


let playing_song = false;

function just_play() {
 if (playing_song == false){
     playsong();
     playing_song = true;
 } else{
     pausesong();
     playing_song = false;
 }
}

// play function
function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML=`<i class="icofont-ui-pause"></i>`;
};

// pause function
function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML=`<i class="icofont-ui-play"></i>`;
};


load_track (i);
// next function
function next_song (){
    if (i < allSongs.length){
        i += 1;
        load_track(i);
        playsong();
        
    }else{
        i = 0;
        load_track(i);
        playsong();
    }
}
function previous_song (){
    if (i > 0 ){
        i -= 1;
        load_track(i);
        playsong();
    }else{
        i =  allSongs.length;
        i += 1;
        load_track(i);
        playsong();
    }
}


function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}

function range_slider(){
    let position = 0;

    if(!isNaN(track.duration)){
     position = track.currentTime * (100 / track.duration);
     slider.value = position;
    };
}


// selecting a song by clicking on the it


for (let i = 0; i < songs.length; i++){
	songs[i].addEventListener('click', () => {
        track.src = allSongs[i].path;
        songArtist.innerHTML = allSongs[i].singer;
        songTheme.innerHTML = allSongs[i].name;
        playsong()
	})
}



let hearts = document.querySelectorAll(".icofont-heart");

hearts.forEach(heart => {
     heart.addEventListener("click", () => {
        heart.classList.toggle("clicked-heart")
     })   
});
