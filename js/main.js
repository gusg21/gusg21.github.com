if (window.addEventListener) { // Mozilla, Netscape, Firefox
    window.addEventListener('load', winLoad, false);
} else if (window.attachEvent) { // IE
    window.attachEvent('onload', winLoad);
}

function winLoad(event) {
    document.getElementsByTagName("html")[0].style.backgroundImage = "url(css/shadedEdges.png),url(css/bg" + (Math.floor(Math.random() * 4) + 1) + ".png)";
}