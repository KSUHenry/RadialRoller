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
    //abilities
   document.getElementById('str')?.addEventListener('click', onStrengthClick);
   document.getElementById('dex')?.addEventListener('click', onDexterityClick);
   document.getElementById('con')?.addEventListener('click', onConstitutionClick);
   document.getElementById('int')?.addEventListener('click', onIntelligenceClick);
   document.getElementById('wis')?.addEventListener('click', onWisdomClick);
   document.getElementById('cha')?.addEventListener('click', onCharismaClick);
   //saves
   document.getElementById('strS')?.addEventListener('click', onStrengthSClick);
   document.getElementById('dexS')?.addEventListener('click', onDexteritySClick);
   document.getElementById('conS')?.addEventListener('click', onConstitutionSClick);
   document.getElementById('intS')?.addEventListener('click', onIntelligenceSClick);
   document.getElementById('wisS')?.addEventListener('click', onWisdomSClick);
   document.getElementById('chaS')?.addEventListener('click', onCharismaSClick);
   //initiative
   document.getElementById('init')?.addEventListener('click', onInitiativeClick);
   //skills0
   document.getElementById('acro')?.addEventListener('click', onAcroClick);
   document.getElementById('anHa')?.addEventListener('click', onAnHaClick);
   document.getElementById('arca')?.addEventListener('click', onArcaClick);
   document.getElementById('athl')?.addEventListener('click', onAthlClick);
   document.getElementById('dece')?.addEventListener('click', onDeceClick);
   document.getElementById('hist')?.addEventListener('click', onHistClick);
   //skills1
   document.getElementById('insi')?.addEventListener('click', onInsiClick);
   document.getElementById('inti')?.addEventListener('click', onIntiClick);
   document.getElementById('inve')?.addEventListener('click', onInveClick);
   document.getElementById('medi')?.addEventListener('click', onMediClick);
   document.getElementById('natu')?.addEventListener('click', onNatuClick);
   document.getElementById('perc')?.addEventListener('click', onPercClick);
   //skills2
   document.getElementById('perf')?.addEventListener('click', onPerfClick);
   document.getElementById('pers')?.addEventListener('click', onPersClick);
   document.getElementById('reli')?.addEventListener('click', onReliClick);
   document.getElementById('soha')?.addEventListener('click', onSoHaClick);
   document.getElementById('stea')?.addEventListener('click', onSteaClick);
   document.getElementById('surv')?.addEventListener('click', onSurvClick);
   //hit dice
   document.getElementById('hitD')?.addEventListener('click', onHitDClick);
   //death save
   document.getElementById('ds')?.addEventListener('click', onDeathClick);


    
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
//abilities
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
//saves
function onStrengthSClick(event){
    onCommandClick("strength_save");
};

function onDexteritySClick(event){
    onCommandClick("dexterity_save");
};

function onConstitutionSClick(event){
    onCommandClick("constitution_save");
};

function onIntelligenceSClick(event){
    onCommandClick("intelligence_save");
};

function onWisdomSClick(event){
    onCommandClick("wisdom_save");
};

function onCharismaSClick(event){
    onCommandClick("charisma_save");
};
//initiative
function onInitiativeClick(event){
    onCommandClick("initiative");
};
//skills
function onAcroClick(event){
    onCommandClick("acrobatics");
};

function onAnHaClick(event){
    onCommandClick("animal_handling");
};

function onArcaClick(event){
    onCommandClick("arcana");
};

function onAthlClick(event){
    onCommandClick("athletics");
};

function onDeceClick(event){
    onCommandClick("deception");
};

function onHistClick(event){
    onCommandClick("history");
};
//skills1
function onInsiClick(event){
    onCommandClick("insight");
};

function onIntiClick(event){
    onCommandClick("intimidation");
};

function onInveClick(event){
    onCommandClick("investigation");
};

function onMediClick(event){
    onCommandClick("medicine");
};

function onNatuClick(event){
    onCommandClick("nature");
};

function onPercClick(event){
    onCommandClick("perception");
};
//skills2
function onPerfClick(event){
    onCommandClick("performance");
};

function onPersClick(event){
    onCommandClick("persuasion");
};

function onReliClick(event){
    onCommandClick("religion");
};

function onSoHaClick(event){
    onCommandClick("sleight_of_hand");
};

function onSteaClick(event){
    onCommandClick("stealth");
};

function onSurvClick(event){
    onCommandClick("survival");
};
//hit die
function onHitDClick(event){
    onCommandClick("hit_dice");
};
//death save
function onDeathClick(event){
    onCommandClick("death_save");
};