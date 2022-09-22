let generateButton = document.getElementById('generate')
console.log(typeof generateButton)
generateButton.addEventListener('click', randomColor)
let randomNumber;

function randomColor() {
    // randomNumber = Math.floor(Math.random() * 256).toString(16)
    // console.log(randomNumber)
    // document.getElementById('hex-display').innerText = `${randomNumber}`
}

randomColor()
//hex display
document.getElementById('hex-display').innerText = `${randomNumber}`