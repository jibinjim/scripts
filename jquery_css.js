$(document).ready(function () {
    $("td").hover(function () {
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        color = "rgb(" + r + "," + g + "," + b + ")";
        $(this).css("background-color", color);
    });
});