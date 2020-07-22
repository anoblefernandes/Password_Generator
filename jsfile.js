// DOM elements
const resultEl = document.getElementById("result")
const lengthEl = document.getElementById("length")
const lowercasetEl = document.getElementById("lowercase")
const uppercasetEl = document.getElementById("uppercase")
const numberEl = document.getElementById("number")
const characterEl = document.getElementById("character")
const generateEl = document.getElementById("generate")


const randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    specialChar: getRandomCharacter
};

// Generate Event Listener
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercasetEl.checked; 
    const hasUpper = uppercasetEl.checked;
    const hasNumber = numberEl.checked;
    const hasChar = characterEl.checked;

    resultEL.innerText = newPassword(length, hasUpper, hasLower, hasNumber, hasChar);
});

// Generate New Password
function newPassword(length, upper, lower, number, specialChar) {
    
    let generatedNewPassword = '';

    const typesCount = lower + upper + number + specialChar;

    const typesArr = [{lower}, {upper}, {number}, {specialChar}].filter(item => Object.values(item)[0]);

    if(typesCount === 0){
        return '';
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]

            generatedNewPassword += randomFunction[funcName]();
        })
    }

    
}

// Generator functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}
function getRandomCharacter() {
    const specialChar = '!@#$%^&*(){}<>?';
    return specialChar[Math.floor(Math.random() * specialChar.length)];
}