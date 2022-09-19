var backgroundSwitchButton = document.getElementById("backgroundSwitchButton")
var i = 1;
backgroundSwitchButton.onclick = function () {
    document.body.style.backgroundImage = 'url(images/bg' + (i + 1) + '.jpg)';
    i++;
    if (i > 4) {
        i = 1;
    }
}
