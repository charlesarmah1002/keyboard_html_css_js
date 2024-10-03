let buttons = document.querySelectorAll('.row button'),
    display = document.querySelector('#display'),
    input = document.querySelector('input[type="text"]'),
    allowedKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    sound = document.getElementById('sound');


buttons.forEach(button => {

    button.addEventListener('click', (e) => {
        e.preventDefault();

        sound.play();

        if (button.classList.contains('clear')) {
            input.value = '';
        } else if (button.classList.contains('backspace')) {
            input.value = input.value.slice(0, -1);
        } else if (button.classList.contains('spaceBar')) {
            input.value += ' '
        } else {
            input.value += e.target.innerText;
        }

        display.innerText = input.value;
    })
});


// writing a function to capture key press
document.onkeydown = (e) => {
    // thinking about writing this function to stop 
    //all inputs that are not an alphabet but it'll have to wait

    buttons.forEach(button => {
        if (e.key.toUpperCase() === button.innerText.toUpperCase()) {
            button.animate(
                [
                    {
                        backgroundColor: 'green',
                        border: 'none',
                        color: 'white'
                    },
                    {
                        backgroundColor: 'transparent',
                        border: '1px solid white',
                        color: 'white'
                    }
                ],
                {
                    duration: 500,
                    fill: 'forwards',
                    iterations: 1
                }
            )
        }
    })

    if (allowedKeys.includes(e.key)) {
        sound.play();
        input.value += e.key.toUpperCase();
    } else if (e.key === ' ') {
        sound.play();
        input.value += ' ';
    } else if (e.key === 'Backspace') {
        sound.play();
        input.value = input.value.slice(0, -1);
    }

    display.innerText = input.value;
}