function showShutdownPopUp() {
    let shutdownBlock = document.getElementById("background-shutdown");
    shutdownBlock.style.top = "0%";
}
function hideShutdownPopUp() {
    let shutdownBlock = document.getElementById("background-shutdown");
    shutdownBlock.style.top = "120%";
}
function shutdown() {
    window.location = "/shutdown";
}
