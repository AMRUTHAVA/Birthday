AOS.init();

const text =
"Some people come into our life and become a beautiful part of it forever ❤️";

let index = 0;

function typeEffect() {

    if(index < text.length){

        document.querySelector(".typing-text").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect,50);
    }
}

typeEffect();

function showSurprise(){

    document.getElementById("surpriseSection").style.display = "block";

    window.scrollTo({
        top:window.innerHeight,
        behavior:"smooth"
    });

}