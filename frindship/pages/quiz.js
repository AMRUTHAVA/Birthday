const quiz = [

{
    question:"What makes our friendship special? ❤️",

    options:[
        "Trust",
        "Memories",
        "Care",
        "All Of These"
    ],

    answer:3
},

{
    question:"Who is the more emotional one? 🥺",

    options:[
        "Me",
        "You",
        "Both",
        "Depends On Mood 😂"
    ],

    answer:2
},

{
    question:"What should never end between us? ✨",

    options:[
        "Friendship",
        "Laughing Together",
        "Talking",
        "Everything ❤️"
    ],

    answer:3
}

];

let current = 0;

let score = 0;

/* Load Question */

function loadQuestion(){

    document.getElementById("question")
    .innerHTML = quiz[current].question;

    for(let i=0;i<4;i++){

        document.getElementById(`btn${i}`)
        .innerHTML = quiz[current].options[i];
    }
}

loadQuestion();

/* Check Answer */

function checkAnswer(index){

    if(index === quiz[current].answer){

        score++;
    }

    current++;

    if(current < quiz.length){

        loadQuestion();

    }else{

        showResult();
    }
}

/* Final Result */

function showResult(){

    document.querySelector(".quiz-box")
    .innerHTML = `

    <h2>
    You know this friendship beautifully ❤️
    </h2>

    <p style="margin-top:20px;">
    Your Score: ${score}/${quiz.length}
    </p>

    <p style="margin-top:30px; line-height:2;">

    No matter what happens in life...

    this friendship will always stay special 💖

    </p>

    <button onclick="goHome()"
    style="
    margin-top:30px;
    padding:15px 30px;
    border:none;
    border-radius:30px;
    background:#ff4da6;
    color:white;
    cursor:pointer;
    ">

    Back Home ✨

    </button>

    `;
}

/* Back */

function goHome(){

    window.location.href="../index.html";
}