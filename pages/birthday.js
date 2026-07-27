const countdown=document.getElementById("countdown");

let n=10;

const timer=setInterval(()=>{

n--;

if(n>0){

countdown.innerHTML=n;

}else{

clearInterval(timer);

document.getElementById("intro").style.display="none";

document.getElementById("giftSection").style.display="flex";

}

},1000);
function fireworks(){

    const container=document.querySelector(".fireworks");

    for(let j=0;j<5;j++){

        setTimeout(()=>{

            const centerX=Math.random()*80+10;
            const centerY=Math.random()*40+10;

            for(let i=0;i<100;i++){

                const spark=document.createElement("div");

                spark.className="firework";

                spark.style.left=centerX+"vw";
                spark.style.top=centerY+"vh";

                spark.style.background=
                `hsl(${Math.random()*360},100%,60%)`;

                const angle=Math.random()*Math.PI*2;

                const distance=80+Math.random()*180;

                spark.style.setProperty(
                    "--x",
                    Math.cos(angle)*distance+"px"
                );

                spark.style.setProperty(
                    "--y",
                    Math.sin(angle)*distance+"px"
                );

                container.appendChild(spark);

                setTimeout(()=>{
                    spark.remove();
                },1300);

            }

        },j*400);

    }

}
function openGift(){

    const gift=document.querySelector(".gift");

    gift.classList.add("open");

    fireworks();

    setTimeout(()=>{

        document.getElementById("giftSection").style.display="none";

        document.getElementById("birthdayContent").classList.add("show");

        confetti();

    },1000);

}

function confetti(){

for(let i=0;i<120;i++){

const c=document.createElement("span");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=`hsl(${Math.random()*360},90%,60%)`;

c.style.animationDuration=2+Math.random()*3+"s";

document.body.appendChild(c);

setTimeout(()=>c.remove(),5000);

}

}
