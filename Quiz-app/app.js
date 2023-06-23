const quiz_dataset = [
    {
        "question": "What is the capital of France?",
        "a": "London",
        "b": "Paris",
        "c": "Madrid",
        "d": "Rome",
        "answer": "b"
    },
    {
        "question": "Which planet is known as the 'Red Planet'?",
        "a": "Venus",
        "b": "Mars",
        "c": "Jupiter",
        "d": "Mercury",
        "answer": "b"
    },
    {
        "question": "Who painted the Mona Lisa?",
        "a": "Vincent van Gogh",
        "b": "Pablo Picasso",
        "c": "Leonardo da Vinci",
        "d": "Michelangelo",
        "answer": "c"
    },
    {
        "question": "Which programming language is known as the 'language of the web'?",
        "a": "Python",
        "b": "Java",
        "c": "JavaScript",
        "d": "C++",
        "answer": "c"
    },
    {
        "question": "What is the largest ocean in the world?",
        "a": "Atlantic Ocean",
        "b": "Indian Ocean",
        "c": "Arctic Ocean",
        "d": "Pacific Ocean",
        "answer": "d"
    }
]
let index = 0;
let wrong = 0, right = 0;
let total = quiz_dataset.length;
const queBox = document.getElementById('queBox');
const optionInput = document.querySelectorAll('.options');
function loadQuestions() {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const q = quiz_dataset[index]
    queBox.innerText = `${index + 1}) ${q.question}`
    optionInput[0].nextElementSibling.innerText = q.a;
    optionInput[1].nextElementSibling.innerText = q.b;
    optionInput[2].nextElementSibling.innerText = q.c;
    optionInput[3].nextElementSibling.innerText = q.d;
}

function submitAnswer() {
    const q = quiz_dataset[index]
    const ans = getAnswer();
    if (ans === q.answer) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestions();
    return
}

function getAnswer() {
    let ans;
    optionInput.forEach((input) => {
        if (input.checked) {
            ans = input.value;
        }
    })
    return ans;
}

function reset() {
    optionInput.forEach((input) => {
        input.checked = false;
    })
}

function endQuiz() {
    document.getElementById('box').innerHTML = `
    <div style=" padding: 5px; font-size:20px; text-align:center; ">
    <h2>Thanks for attending this Quiz</h2>
    <h3> ${right} is correct </h3>
    <h3> ${wrong} is wrong </h3>
    </div>
    `
}

//initial call
loadQuestions()