const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(function(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e.seconds)),console.log("czas odtwarzania:",e.seconds)})),t.getVideoTitle().then((function(e){console.log("title:",e)})),t.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
//# sourceMappingURL=02-video.31854ba9.js.map
