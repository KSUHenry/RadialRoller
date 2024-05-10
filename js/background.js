// background.js

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'sendCommand') {
        // Forward the message to the content script
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, message, function(response){
                if(response){
                    console.log(response.toString())
                }
           });
        });
}}); 