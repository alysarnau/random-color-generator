let generateButton = document.getElementById('generate')
let displayText = document.getElementById('hex-display')
let copyButton = document.getElementById('copy-to-clipboard')

let randomNumber;
let generatedColor;

generateButton.addEventListener('click', randomColor)
copyButton.addEventListener('click', clickToCopy)

function randomColor() {
    // create random number and convert to hexCode
    randomNumber = Math.random().toString(16).substring(2,8)
    generatedColor = `#${randomNumber}`
    displayText.value = generatedColor
    // update background color
    document.body.style.backgroundColor = (generatedColor)
}

// initial randomize on pageload
randomColor()
//hex display on pageload
displayText.innerText = generatedColor

// click to copy
function clickToCopy() {
    displayText.select();
    displayText.setSelectionRange(0,99999) // for mobile
    navigator.clipboard.writeText(generatedColor)
    alert(`Copied ${generatedColor} to clipboard!`)
}

