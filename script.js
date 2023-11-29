// script.js



document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to elements with specific IDs or classes

    // Example 1: Show Location
    var showLocationButton = document.getElementById('showLocationButton');
    if (showLocationButton) {
        showLocationButton.addEventListener('click', function () {
            showLocation();
        });
    }

    // Example 2: Open WhatsApp
    var openWhatsAppButton = document.getElementById('openWhatsAppButton');
    if (openWhatsAppButton) {
        openWhatsAppButton.addEventListener('click', function () {
            openWhatsApp();
        });
    }

    // Example 3: Show Custom Prompt
    var showCustomPromptButton = document.getElementById('showCustomPromptButton');
    if (showCustomPromptButton) {
        showCustomPromptButton.addEventListener('click', function () {
            showCustomPrompt();
        });
    }

    // Example 4: Close Custom Prompt
    var closeCustomPromptButton = document.getElementById('closeCustomPromptButton');
    if (closeCustomPromptButton) {
        closeCustomPromptButton.addEventListener('click', function () {
            closeCustomPrompt();
        });
    }

    // Example 5: Show Custom Popup
    var showCustomPopupButton = document.getElementById('showCustomPopupButton');
    if (showCustomPopupButton) {
        showCustomPopupButton.addEventListener('click', function () {
            showCustomPopup();
        });
    }

    // Example 6: Close Custom Popup
    var closeCustomPopupButton = document.getElementById('closeCustomPopupButton');
    if (closeCustomPopupButton) {
        closeCustomPopupButton.addEventListener('click', function () {
            closeCustomPopup();
        });
    }

    // Example 7: Show Custom Alert
    var showCustomAlertButton = document.getElementById('showCustomAlertButton');
    if (showCustomAlertButton) {
        showCustomAlertButton.addEventListener('click', function () {
            var customMessage = "Ola! This is a custom alert message!";
            showCustomAlert(customMessage);
        });
    }
});

// Your existing functions remain unchanged below this line

function showLocation() {
    window.open("https://maps.app.goo.gl/9D68exTqZ1Bqgha29", "_blank");
}


function openWhatsApp() {
    var phoneNumber = "+916302478175";
    window.open("https://wa.me/" + phoneNumber + "?text=Hi%20!", "_blank");
}

function showCustomPrompt() {
    var customPrompt = document.getElementById('customPrompt');
    customPrompt.style.display = 'block';
}

function closeCustomPrompt() {
    var customPrompt = document.getElementById('customPrompt');
    customPrompt.style.animation = 'fadeOut 0.5s ease-in-out forwards';
    setTimeout(function () {
        customPrompt.style.display = 'none';
        customPrompt.style.animation = '';
    }, 500);
}

function foff() {
    var customMessage = "Ola! This is a custom alert message!";
    showCustomAlert(customMessage);
}

function showCustomPopup() {
    var customPopup = document.getElementById("customPopup");
    customPopup.style.display = "block";
}

function closeCustomPopup() {
    var customPopup = document.getElementById("customPopup");
    customPopup.style.display = "none";
}

function showCustomAlert(message) {
    alert(message);
}


// events.html
// Function to open the location popup
function openLocationPopup() {
    document.getElementById('locationPopup').style.display = 'block';
}