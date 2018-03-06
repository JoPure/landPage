/**
 * Created by jo.chan on 2017/11/15.
 */


//youtube
window.videoHtml = '<div id="player"></div>';
$(".playBtn").on("click", function () {
    $(".video-wrap").show();
    $(".black").show();
    $(".video").append(videoHtml).show();
    var player = new YT.Player('player', {
        width: '750',
        height: '468',
        videoId: '_rVkr0PFJVo',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
});

window.tag = document.createElement('script');

tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function onPlayerReady(event) {
    event.target.playVideo();
}


function stopVideo() {
    player.stopVideo();
}

$(".video-wrap").on("click", function () {
    $(".video").html("").hide();
    $(".black").hide();
    $(".box").hide();
    $(this).hide();
});