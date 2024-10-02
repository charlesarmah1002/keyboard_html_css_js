let buttons = document.querySelectorAll('.row span'),
input = document.querySelector('input[type="text"]'),
allowedKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


buttons.forEach(button => {
    button.addEventListener('click', (e) => {

        if (button.classList.contains('clear')) {
            input.value = '';
        } else if (button.classList.contains('backspace')) {
            input.value = input.value.slice(0, -1);
        }else if (button.classList.contains('spaceBar')) {
            input.value += ' '
        } else {
            input.value += e.target.innerText;
        }
    })
});


// writing a function to capture key press
document.onkeydown = (e) => {
    // thinking about writing this function to stop 
    //all inputs that are not an alphabet but it'll have to wait

    if (allowedKeys.contains(e.key)) {
        input.value += e.key.toUpperCase();
    }
}