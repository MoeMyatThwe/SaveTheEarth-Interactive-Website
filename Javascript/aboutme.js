const previousPageUrl = document.referrer;
const previousLink = document.getElementById("previous-link");
previousLink.href = previousPageUrl;

function showWelcomeMessage() {
    alert("Welcome to About Me Page!");
}
window.onload = showWelcomeMessage;