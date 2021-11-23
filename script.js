var player;
function onYouTubePlayerAPIReady() {

    player = new YT.Player('video', {
        events: {

            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {


    var playButton = document.getElementById("yt-button");
    playButton.addEventListener("click", function() {
        if(player.getPlayerState()==1){ 
          playButton.innerHTML = '<i class="fas fa-play"></i>';
          player.pauseVideo();
          }else{
            playButton.innerHTML = '<i class="fas fa-pause"></i>';
            player.playVideo();
          }
    });
  }

  function exit() {
    var radio = document.getElementById("radio")
    var playButton = document.getElementById("yt-button");
          radio.style.display="none";
          player.stopVideo();
          playButton.innerHTML = '<i class="fas fa-play"></i>';

  }
  function minimalize() {
    var radio = document.getElementById("radio")
          radio.style.display="none";

  }
  function showRadio(){
    var radio = document.getElementById("radio")
          radio.style.display="block";
  }
  


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function dropdownMenu() {  
  var playButton = document.getElementById("yt-button");
  var list = document.getElementById("option");  
  var video = document.getElementById("video");
  document.getElementById("station").value = list.options[list.selectedIndex].text;  
  var strUser = list.value;
  if(strUser=="Lofi"){
    video.src= "https://www.youtube.com/embed/5qap5aO4i9A?controls=0&enablejsapi=1";
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  } if(strUser=="House"){
    video.src= "https://www.youtube.com/embed/GDQnA1LVCWA?controls=0&enablejsapi=1";
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  } if(strUser=="Rock"){
    video.src= "https://www.youtube.com/embed/-v9Pm9PYU8E?controls=0&enablejsapi=1";
    playButton.innerHTML = '<i class="fas fa-play"></i>';
  }
  }  