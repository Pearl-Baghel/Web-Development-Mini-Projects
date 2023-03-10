console.log("Welcome to Groove");
//Initialize the variable
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterPause = document.getElementById('masterPause');
let progressbar = document.getElementById("progressbar");

let songs = [
    { songName: "Perfect", filePath: " ", coverPath: " " },
    { songName: "Perfect", filePath: " ", coverPath: " " },
    { songName: "Perfect", filePath: " ", coverPath: " " },
    { songName: "Perfect", filePath: " ", coverPath: " " },
    { songName: "Perfect", filePath: " ", coverPath: " " },
    { songName: "Perfect", filePath: " ", coverPath: " " }
]

// audioElement.play();
//Handle play pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
    }
})
masterPause.addEventListener('click', () => {
    if (audioElement.play) {

        audioElement.pause();
    }
})
// Listen to events
progressbar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
})
