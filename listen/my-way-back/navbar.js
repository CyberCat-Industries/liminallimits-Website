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
setWarning('Some Streaming Services may not be available quite yet. Check back later if your service is unavailable!');
