let birthday = new Date("August 5, 2026 00:00:00");


function openHeart(){

    setInterval(function(){

        let now = new Date();

        let difference = birthday - now;


        if(difference <= 0){

            document.getElementById("countdown").innerHTML =

            `
            🎉 Today is your special day ❤️
            <br><br>
            Your surprise is unlocked 🎁
            `;

            return;
        }


        let days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );


        let hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );


        let minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );


        let seconds = Math.floor(
            (difference / 1000) % 60
        );


        document.getElementById("countdown").innerHTML =

        `
        💖 Surprise is waiting...

        <br><br>

        <span>
        ${days} Days 
        ${hours} Hours 
        ${minutes} Minutes 
        ${seconds} Seconds
        </span>

        `;


        document.getElementById("surpriseBtn")
        .style.display = "inline-block";


    },1000);

}



function comingSoon(){

    document.getElementById("countdown").innerHTML =

    `
    ✨ Coming Soon ❤️
    <br><br>
    The biggest surprise is waiting for you 🎂
    `;

}