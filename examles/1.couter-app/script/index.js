let text = document.getElementById('value');
let number = 0;

// default 
text.innerText = number;
// tăng
document.getElementById("increase")
    .addEventListener('click', function () {
        number++;
        text.innerText = number;
        let color = handlerColorNumber(number)
        text.style.color = color
    })
// giảm
document.getElementById("decrease")
    .addEventListener('click', function () {
        number--;
        text.innerText = number;
        let color = handlerColorNumber(number)
        text.style.color = color
    })
// reset
document.getElementById("reset")
    .addEventListener('click', function () {
        number = 0;
        text.innerText = number;
        let color = handlerColorNumber(number)
        text.style.color = color
    })

const handlerColorNumber = (number) => {
    if (number > 0) {
        return 'green'
    } else if (number < 0) {
        return 'red'
    } else {
        return 'black'
    }
}