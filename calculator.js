const buttons = document.querySelectorAll('input[type="button"]');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        button.classList.add('btn-press');
        setTimeout(() => {
            button.classList.remove('btn-press');
        }, 300);
    });
});
const equalBtn = document.querySelector('input[value="="]');
equalBtn.addEventListener('click', () => {
    const display = document.querySelector('input[name="display"]');
    try {
        if(display.value !== "") {
            display.value = eval(display.value);
        }
    } catch (err) {
        display.value = "Error";
        setTimeout(() => display.value = "", 1500);
    }
});