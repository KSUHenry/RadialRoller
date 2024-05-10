// content.js

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

    if (message.action === 'sendCommand') {

        // Get the command from the message
        var command = message.command;

        // Find the text chat input field on Roll20
        var chatInput = document.querySelector('#textchat-input textarea');
        if (chatInput) {

            // Set the command in the text chat input field
            chatInput.value = command;

            // Simulate the Enter key press to send the command
            var enterEvent = new KeyboardEvent('keydown', {
                key: 'Enter',
                keyCode: 13,
                bubbles: true,
                cancelable: true
            });
            chatInput.dispatchEvent(enterEvent);
        } else {
            console.error('Text chat input field not found on Roll20.');
        }
    } 
    sendResponse(message.action + " ran successfully "); 
    return true;
});