function messageHello(){
    let name = document.querySelector('.name');
    let lastName = document.querySelector('.lastName');
    let resultMessage = document.querySelector('span');
    resultMessage.textContent = `Ответ: Здравствуйте, ${name.value} ${lastName.value}!`;
}