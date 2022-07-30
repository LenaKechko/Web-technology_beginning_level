btnElement = document.querySelector('.btn');
resultElement = document.querySelector('.result');
buttons = document.querySelectorAll('[name="product"]');
resultElement.textContent = "0";

btnElement.addEventListener("click",
    function () {
        let total = 0;
        for (const button of buttons) {
            if (button.checked) {
                total += parseInt(button.value);
            }
        }
        resultElement.textContent = total.toString();
    });