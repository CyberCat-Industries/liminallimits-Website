// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navMenu.classList.remove('active');
    });
});

// Configurable warning bar behavior
const warningBar = document.getElementById('warningBar');
const warningText = document.getElementById('warningText');
const warningClose = document.getElementById('warningClose');

function setWarning(message) {
    if (!message || !message.trim()) {
        warningBar.classList.add('hidden');
        warningText.textContent = '';
        return;
    }
    warningText.textContent = message;
    warningBar.classList.remove('hidden');
}

function clearWarning() {
    warningBar.classList.add('hidden');
    warningText.textContent = '';
}

warningClose.addEventListener('click', clearWarning);

// Example: Editable message text below, or call setWarning(...) from other scripts
setWarning('Streaming on some platforms may not be available yet. Come back later or check out Bandcamp!');
