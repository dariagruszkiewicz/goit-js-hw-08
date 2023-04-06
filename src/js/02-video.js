import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const throttled = throttle(time => {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(time.seconds)
  );
  console.log('czas odtwarzania:', time.seconds);
}, 1000);

player.on('timeupdate', throttled);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
