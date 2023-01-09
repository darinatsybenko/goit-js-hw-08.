import throttle from 'lodash.throttle';
console.log(throttle);
import Player from '@vimeo/player';
console.log(Player);
const iframe = document.querySelector('iframe');
console.log(iframe);
const player = new Vimeo.Player(iframe);
player.on('timeupdate',throttle(onPlay, 1000));


function onPlay(currentTime) {
    localStorage.setItem('videoplayer-current-time', currentTime.seconds)

}

const keyPley = localStorage.getItem(`videoplayer-current-time`)
player.setCurrentTime(keyPley).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
  

