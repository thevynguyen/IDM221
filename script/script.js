function myFunction () {
    var x = document.getElementById("topMenu");
    if (x.className == "menu-top") {
        x.className += " responsive";
    } else {
        x.className = "menu-top";
    }
}
