document.addEventListener('DOMContentLoaded', function openClose() {
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function openClose1() {
        menu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    const list = document.querySelectorAll('li');
    function activeLink() {
        list.forEach((item) => item.classList.remove('active'));
        this.classList.add('active');
    }

    list.forEach((item) => item.addEventListener('click', activeLink));
});

document.addEventListener("DOMContentLoaded", function setupFormEventListener() {
    var form = document.getElementById('commandForm');
    if (form) {
        form.addEventListener('submit', handleSubmitForm);
    } else {
        console.error('Command form element not found.');
    }
});

function handleSubmitForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    var characterNameInput = document.getElementById('characterName');
    if (characterNameInput) {
        var characterName = characterNameInput.value;

        // Construct the command using the character name for strength saving throw
        var command = "%" + characterName + "|strenth-roll-save";

        // Send the command to Roll20
        chrome.runtime.sendMessage({ action: 'sendCommand', command: command });
    } else {
        console.error('Character name input element not found.');
    }
}

