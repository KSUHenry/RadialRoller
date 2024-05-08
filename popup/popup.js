document.addEventListener('DOMContentLoaded', function() {
    let menuToggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
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

document.addEventListener("DOMContentLoaded", function() {
    // Handle submit button click
    document.querySelector('#strS').click(function() {
    // Get the text from the input field
    var text = document.querySelector("%'#inputText'|strength-save-roll").val();

    // Print the text to the textbox on another webpage
    document.querySelector('#textchat-input').val(text);
    });
});

