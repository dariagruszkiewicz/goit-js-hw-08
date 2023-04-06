const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function (time) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(time.seconds)
  );
  console.log('czas odtwarzania:', time.seconds);
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
