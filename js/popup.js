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
   document.getElementById('strS')?.addEventListener('click', onStrengthClick);
   document.getElementById('dexS')?.addEventListener('click', onDexterityClick);
   document.getElementById('conS')?.addEventListener('click', onConstitutionClick);
   document.getElementById('intS')?.addEventListener('click', onIntelligenceClick);
   document.getElementById('wisS')?.addEventListener('click', onWisdomClick);
   document.getElementById('chaS')?.addEventListener('click', onCharismaClick);
    
});

function onCommandClick(commandName){

    var characterNameInput = document.getElementById('characterName');
    if (characterNameInput) {

        var characterName = characterNameInput.value;

        // Construct the command using the character name for strength saving throw
        var command = "%{" + characterName + "|" + commandName + "}";

        // Send the command to Roll20

      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'sendCommand', command: command } , function(response){
            if(response){
                console.log(response.toString())
            }
       });
    });
    } else {
        console.error('Character name input element not found.');
    }
};

function onStrengthClick(event){
    onCommandClick("strength");
};

function onDexterityClick(event){
    onCommandClick("dexterity");
};

function onConstitutionClick(event){
    onCommandClick("constitution");
};

function onIntelligenceClick(event){
    onCommandClick("intelligence");
};

function onWisdomClick(event){
    onCommandClick("wisdom");
};

function onCharismaClick(event){
    onCommandClick("charisma");
};