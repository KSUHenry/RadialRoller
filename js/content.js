// content.js

// Function to inject the injection script into the Roll20 website
function injectScript(scriptPath) {
    var script = document.createElement('script');
    script.src = chrome.runtime.getURL(scriptPath);
    script.onload = function() {
        this.remove(); // Clean up the injected script after it's loaded
    };
    (document.head || document.documentElement).appendChild(script);
}

// Inject the injection script into the Roll20 website
injectScript('injection.js');

// Example usage: Send a command to Roll20
var command = "%CharacterName|strength-roll-save";
sendCommandToRoll20(command);
