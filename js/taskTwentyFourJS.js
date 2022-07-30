btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".bill");
inputElement = document.querySelectorAll(".count");
checkboxesElement = document.querySelectorAll(".custom-checkbox");

document.querySelector("main").addEventListener("change", calculationBill);

checkboxesElement.forEach(element => {
    element.addEventListener('change', function (event) {
        let attr = event.target.getAttribute('id').valueOf();
        let inputCount = document.querySelector('[name="' + attr + '"]');
        if (!event.target.checked) {
            inputCount.value = 0;
        } else if (inputCount.value == 0) {
            inputCount.value = 1;
        }
    });
});

inputElement.forEach(element => {
    element.addEventListener("change", function () {
        if (element.value < 0) {
            alert("Введите корректное количество!");
            element.value = 0;
        }
    });
});

btnElement.addEventListener("click", function () {
    let fullElement = document.querySelector(".lastname").value + " " + document.querySelector(".name").value;
    let result = document.querySelector("p").textContent;
    alert(`Заказчик: ${fullElement}\n${result}`);
});

function calculationBill() {
    let result = 0;
    let checkboxesElement = document.querySelectorAll(".custom-checkbox");
    for (const checkbox of checkboxesElement) {
        if (checkbox.checked) {
            let attr = checkbox.getAttribute('id').valueOf();
            let count = document.querySelector('[name="' + attr + '"]').value;
            result += count * checkbox.value;
        }
    }
    resultElement.innerHTML = result.toString();
};