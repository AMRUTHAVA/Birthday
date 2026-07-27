const slides = document.querySelectorAll(".slide");

const captions = [

"Every memory with you feels special ✨",

"Some moments become forever memories ❤️",

"Thank you for being part of my life 🌸",

"Some people become memories… but you became my safe place. ❤️",

"No matter how many years pass, our memories will always feel the same. ✨",
"Bestie memories = endless smiles + emotional moments. 🥹",
"Every photo with you holds a story my heart never wants to forget. 💖",

];

let current = 0;

/* Slideshow */

setInterval(() => {

    slides[current]
    .classList.remove("active");

    current = (current + 1)
    % slides.length;

    slides[current]
    .classList.add("active");

    document
    .getElementById("caption")
    .innerHTML = captions[current];
    

},3000);

/* Back */

function goHome(){

    window.location.href="../index.html";
}