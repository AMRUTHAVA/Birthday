const letter = `

To My Favorite Person ❤️

Happy Birthday, My Dearest Bestie... 🎂✨

I don't even know where to begin because no matter how many words I write, they will never be enough to express how much you mean to me.

Before you came into my life, I always believed that people eventually leave, change, or stop caring. I never expected someone could become such an important part of my life without asking for anything in return.

Then... you happened. ❤️

You entered my life so normally, but little by little, you became one of the most special people I have ever met.

You changed the way I see friendship.

You proved to me that not everyone is the same.

You showed me that there are still people who genuinely care, who stay, who understand, who support, and who make life brighter just by being themselves.

Looking back at my college journey, I honestly can't imagine it without you.

If you weren't there, my college life would have been so different.

Many of my happiest memories exist because you were a part of them.

The laughs we shared...
The random conversations...
The silly moments...
The memories we created together...

Those moments became some of the most precious chapters of my life.

Whenever I was happy, you celebrated with me.

Whenever I was stressed, you listened.

Whenever I felt confused or overwhelmed, somehow talking to you made everything feel lighter.

You never had to do anything extraordinary.

Just your presence was enough.

You became one of the biggest reasons behind my smiles.

Thank you for believing in me when I doubted myself.

Thank you for supporting me even during the days when I wasn't at my best.

Thank you for making ordinary days feel unforgettable.

Thank you for accepting me exactly as I am.

Some people meet hundreds of people in life but only a few leave a permanent mark on their hearts.

You are one of those rare people for me.

No matter where life takes us after college...

No matter how busy we become...

No matter how many new people we meet...

I truly hope our friendship never changes.

I hope years from now we can still laugh about our memories and create many more together.

You deserve every happiness in this world because you have brought happiness into so many lives—including mine.

I'm genuinely grateful that life introduced me to someone like you.

Meeting you is one of the best things that happened to me.

Thank you for being my safe place.

Thank you for being my biggest comfort.

Thank you for simply being YOU. ❤️

On your birthday, I don't wish for expensive gifts or grand celebrations.

I just wish that your life is always filled with happiness, peace, success, good health, beautiful memories, and people who love you as much as you deserve.

May every dream you have come true.

May your smile never fade.

And may you always remember that somewhere in this world, there is a friend who will always be thankful that you came into her life.

Happy Birthday, My Favorite Person. 🎂❤️

You'll always have a very special place in my heart.

With lots of love,

Your Moon🌕

`;

let i = 0;

function openLetter(){

    document.getElementById("envelope").classList.add("open");

    setTimeout(()=>{

        document.getElementById("letterBox").classList.add("show");

        typeLetter();

    },900);

}

function typeLetter(){

    if(i < letter.length){

        document.getElementById("letterText").innerHTML += letter.charAt(i);

        i++;

        setTimeout(typeLetter,35);

    }

}

function showSecret(){

    document.getElementById("secret").innerHTML=
    "💖 No matter what happens, you'll always be one of my favorite people. 💖 LOVE YOU SO MUCH";

}

function goBack(){

    window.location.href="../index.html";

}

/* Floating Hearts */

const container=document.querySelector(".floating-hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    const hearts=["💖","💕","❤️","💗","💞"];

    heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*30)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    container.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,700);