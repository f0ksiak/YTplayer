var player;


function onYouTubePlayerAPIReady() {

    player = new YT.Player('video', {
        events: {

            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {


    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function() {
        player.playVideo();
    });

    var pauseButton = document.getElementById("pause-button");
    pauseButton.addEventListener("click", function() {
        player.pauseVideo();
    });
  }


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function dropdownMenu() {  
  var list = document.getElementById("option");  
  document.getElementById("station").value = list.options[list.selectedIndex].text;  
  var strUser = list.value;
  if(strUser=="Lofi"){
    document.getElementById("video").src= "https://www.youtube.com/embed/5qap5aO4i9A?controls=0&enablejsapi=1";
  } if(strUser=="House"){
    document.getElementById("video").src= "https://www.youtube.com/embed/GDQnA1LVCWA?controls=0&enablejsapi=1";
  } if(strUser=="Rock"){
    document.getElementById("video").src= "https://www.youtube.com/embed/-v9Pm9PYU8E?controls=0&enablejsapi=1";
  }
  }  