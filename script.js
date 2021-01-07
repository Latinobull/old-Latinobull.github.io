var bar = document.getElementById('js-progressbar');
var intButton = $("#introButton")
var intText = $("#introText")
$(document).ready(function () {


    var animate = setInterval(function () {

        bar.value += 10;

        if (bar.value >= bar.max) {
            clearInterval(animate);
            intButton.css("display", "block")
            intText.css("display", "block")
        }

    }, 1000);
});

