var desktopImg = new Image();
var wall = document.getElementById("wallpaper");
desktopImg.onload = function () {
    wall.insertAdjacentElement("afterend",desktopImg);
};
var imgURL = chrome.extension.getURL("images/trans_desktop.png");
desktopImg.src = imgURL;
desktopImg.width = wall.width;
desktopImg.height = wall.height;
desktopImg.id = "desktop";