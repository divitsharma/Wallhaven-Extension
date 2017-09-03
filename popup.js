
document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById("toggleBtn");
    toggleBtn.addEventListener("click", function () {
        document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
        chrome.tabs.executeScript(null, { file: "toggle.js" });
    });
})