document.addEventListener("DOMContentLoaded", () => {
    setInterval(blinker, 500);
    let input = document.getElementById("inputField"); // get the input element
    input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
    resizeInput(); // immediately call the function
    
})

function blinker() {
    $('.blinkMe').fadeOut(350);
    $('.blinkMe').fadeIn(350);
}
function resizeInput() {
    this.style.maxWidth = this.value.length + "ch";
}

function dieRoll(size) {
    let rollResult = Math.floor(Math.random() * size) + 1 ;
}