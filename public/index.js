/**
 * Created by jo.chan on 2017/11/15.
 */


//youtube
window.videoHtml = '<div id="player"></div>';
$(".playBtn").on("click", function () {
    fbq('track', 'ViewContent');
    $(".video-wrap").show();
    $(".black").show();
    $(".video").append(videoHtml).show();
    var player = new YT.Player('player', {
        width: '750',
        height: '468',
        videoId: 'NkC5_O4ny1E',
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
        // setTimeout(stopVideo, 6000);
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

$(".ios").on("click", function () {
    fbq('track', 'Lead');
    gtag('event', 'appstore', {
        'event_category': 'appstore_category',
        'event_label': 'appstore_label'
    });
    alert('คอยติดตาม');
    window.location = 'http://dd.pocketgamesol.com/ios_download_guide/';
});

$(".apk").on("click", function () {
    fbq('track', 'AddToWishlist');
    gtag('event', 'apk', {
        'event_category': 'apk_category',
        'event_label': 'apk_label'
    });
});

$(".fb").on("click", function () {
    fbq('track', 'AddToCart');
    gtag('event', 'facebook', {
        'event_category': 'facebook_category',
        'event_label': 'facebook_label'
    });
});


$(".google").on("click", function () {
    fbq('track', 'Purchase');
    gtag('event', 'google play', {
        'event_category': 'google play_category',
        'event_label': 'google play_label'
    });
});