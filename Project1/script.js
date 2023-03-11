console.log("Welcome to Groove");
//Initialize the variable
let songIndex = 0;
let audioElement = new Audio('song/0.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressbar = document.getElementById("progressbar");
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));


let songs = [
    { songName: "Perfect", filePath: "song/0.mp3 ", coverPath: "cover/0.jpg " },
    { songName: "Iraadey", filePath: "song/1.mp3 ", coverPath: "cover/1.jpg " },
    { songName: "Malang Sajna", filePath: "song/2.mp3 ", coverPath: "cover/2.jpg " },
    { songName: "Pyar Hota Kayi Bar Hai", filePath: "song/3.mp3 ", coverPath: "cover/3.jpg " },
    { songName: "OOPS", filePath: "song/4.mp3 ", coverPath: "cover/4.jpg " },
    { songName: "BIBA", filePath: "song/5.mp3 ", coverPath: "cover/5.jpg " }
]
songitem.forEach((element, i) => {
    // console.log(element , i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songName;

});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})


// audioElement.play();
//Handle play pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;

    }
})

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    //update seek bar 
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100); // progress percentage 
    // console.log(progress);
    progressbar.value = progress;
})
progressbar.addEventListener('change', () => {
    audioElement.currentTime = ((progressbar.value * audioElement.duration) / 100);

})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0;
    }
    else{
    songIndex +=1;
    }
    audioElement.src = `song/${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
    songIndex -=1;
    }
    audioElement.src = `song/${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})