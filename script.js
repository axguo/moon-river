const lyrics = [
    { time: 0, lyric: "" },
    { time: 5, lyric: "Moon river,"}, 
    { time: 10, lyric: "wider than a mile" },
    { time: 13, lyric: "I'm crossing you in style someday" },
    { time: 22.5, lyric: "Oh, dream maker,"},
    { time: 27, lyric: "you heartbreaker" },
    { time: 32, lyric: "Wherever you're going, I'm going your way" },
    { time: 42, lyric: "Two drifters, off to see the world" },
    { time: 50, lyric: "There's such a lot of world to see" },
    { time: 60, lyric: "We're after the same rainbow's end" },
    { time: 73, lyric: "Waitin' 'round the bend" },
    { time: 78, lyric: "My huckleberry friend" },
    { time: 83, lyric: "Moon river and me" },

];
function playMusic() {
    var audio = document.getElementById('background-music');
    if (audio) {
        audio.loop = true;
        audio.play().catch(e => console.error("Error playing audio:", e));
    }
}


function displayCurrentLyric(currentTime, event) {
    // Find the last lyric that has started
    const currentLyric = lyrics.reduce((prev, curr) => {
        return (curr.time <= currentTime) ? curr : prev;
    }, lyrics[0]);

    // Display the lyric where the user clicks
    if (event) {
        const x = event.pageX;
        const y = event.pageY;
        const $lyricText = $('<span class="text text-fade-spread-blur"></span>').text(currentLyric.lyric).css({
            left: x + 'px',
            top: y + 'px',
            position: 'absolute', // Ensure it's positioned absolutely
        });

        $('body').append($lyricText);

        // remove
        setTimeout(function() {
            $lyricText.remove();
        }, 8000); 
    }
}

// Play music after the first user interaction and display lyrics where clicked
document.addEventListener('click', function(event) {
    var audio = document.getElementById('background-music');
    if (!audio.paused) {
        displayCurrentLyric(audio.currentTime, event);
    } else {
        playMusic();
    }
});

$(document).ready(function() {
    $('.demo').ripples({
        resolution: 256,
        dropRadius: 20,
        perturbance: 0.02,
        interactive: true,
    });

    $('.demo').click(function(e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var $text = $('<span class="test">Moon River</span>').css({
            position: 'absolute',
            left: x + 'px',
            top: y + 'px',
            color: 'white', // Change as needed
            'font-size': '20px' // Change as needed
        });
    });
});

