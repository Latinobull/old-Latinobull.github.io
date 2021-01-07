var bar = document.getElementById('js-progressbar');
var intButton = $("#introButton")
var intText = $("#introText")
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
});

$(document).ready(function () {

}
)
