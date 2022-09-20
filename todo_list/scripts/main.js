var backgroundSwitchButton = document.getElementById("backgroundSwitchButton")
var container = document.getElementById("container")
var todo = document.getElementById("todo")
var i = 1;

todo.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        create();
    }
});

backgroundSwitchButton.onclick = function () {
    document.body.style.backgroundImage = 'url(images/bg' + (i + 1) + '.jpg)';
    i++;
    if (i > 4) {
        i = 1;
    }
    create();
}

function create() {
    var text = document.getElementById("todo");
    var divClass = document.createAttribute("class");
    divClass.value = 'div';
    var div = document.createElement("div");
    div.setAttributeNode(divClass);
    container.appendChild(div);
    div.innerHTML = text.value;
}

