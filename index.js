const input = document.querySelector(".input input");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+[]{}|;:,.<>?";

const allChars = upperCase + lowerCase + number + symbol;

const length = 12;

function genrate() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    input.value = password;
}

function copyPassword() {
    input.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(input.value);

    if (input.value == "") {
        alert("Click Genrate Password Button");
    } else {
        alert("Copy the text " + input.value);
    }
}