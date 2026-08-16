function makeHeartBeat() {
const heart= document.querySelector('.heart');
const song = document.getElementById('song');

heart.classList.toggle('beating');
document.body.classList.toggle('lit');

if (heart.classList.contains('beating')) {
    song.play();
} else {
    song.pause();
}

}
