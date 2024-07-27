
document.addEventListener("DOMContentLoaded", function() {
    var sidenav = document.querySelector(".side-navbar");
    if (sidenav) {
        sidenav.style.left = "-60%";
    } else {
        console.error("Element with class 'side-navbar' not found.");
    }
});
var sidenav = document.querySelector(".side-navbar");

function shownavbar() {
    sidenav.style.left = "0%";
}
function closenavbar() {
    sidenav.style.left = "-60%";
}