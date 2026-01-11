const textElement = document.querySelector(".typing-text");
const texts = ["Geliştiriciyim.", "Öğrenciyim.", "Teknoloji Tutkunuyum."];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    textElement.textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Kelime bitince 2 saniye bekle
    } else {
        setTimeout(type, 100); // Yazma hızı
    }
})();
