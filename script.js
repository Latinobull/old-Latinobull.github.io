var bar = document.getElementById('js-progressbar');
var intButton = $("#introButton")
var intText = $("#introText")
var pBar = $("#progress")
$(document).ready(function () {


    var animate = setInterval(function () {

        bar.value += 25;

        if (bar.value >= bar.max) {
            clearInterval(animate);
            intButton.css("display", "block")
            intText.css("display", "block")
        }

    }, 1000);
    var countdown = 3
    var timerID = setInterval(function () {
        if (countdown == 0) {
            clearTimeout(timerID)
            intText.text("This is Donnahue George")
        } else {
            intText.html(countdown)
            countdown--
        }
    }, 1000)

    intButton.on("click", function() {
        intText.addClass("uk-animation-fade uk-animation-reverse")
        intButton.addClass("uk-animation-fade uk-animation-reverse")
        pBar.addClass("uk-animation-fade uk-animation-reverse")
        var countdown = 1
    var timerID = setInterval(function () {
        if (countdown == 0) {
            clearTimeout(timerID)
            location.replace("main.html")
            
        } else {
            countdown--
        }
    }, 1000)
    })
    // .then(
    //     location.replace("main.html")
    // )






});

