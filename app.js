let questionText = document.getElementById("queation")
let options = document.getElementById("options")
let submit = document.getElementById("submit")
let start = document.getElementById("start")
let nextBtn = document.getElementById("next")
let prevBtn = document.getElementById("prev")
let res = document.getElementById("result")


let currrentPage = 0;
let score = 0;

function Showquestions() {
    start.style.display = "none";
  if(currrentPage == (questions.length)-1)
  {
    submit.innerText = " SUBMIT"
  }
  if (currrentPage == 0) {
    prevBtn.style.display="none"
  }
  else
  {
     prevBtn.style.display="flex"
  }

    questionText.innerText = questions[currrentPage].question;
    options.innerHTML = "";

    questions[currrentPage].options.forEach(choice => {
        let list = document.createElement("li");
      
        list.innerHTML = ` <li class="option">${choice}</li>`;
        list.addEventListener("click", () => { selectedAns(choice) })
        options.appendChild(list)
    }
    )
}



function selectedAns(choice) {

    const correctAns = questions[currrentPage].correctAnswer
    submit.style.display = "flex";
   
    if (choice === correctAns) {
        score++;
       

    }
    else
    {
        console.log("Wrong Answer");
        
        
    }


}




start.addEventListener("click", Showquestions)
submit.addEventListener("click", () => {
    currrentPage++;
    if (currrentPage < questions.length) {
        Showquestions()
    }

    else {
        showResult();
    }

}



)
prevBtn.addEventListener("click", () => {

    currrentPage--;


    Showquestions();

})
function showResult() {
    questionText.style.display = "none";
    options.style.display = "none";
    res.style.display = "flex"
    res.innerText = `You have got ${score} out of ${questions.length}`;
    prevBtn.style.display = "none"
    submit.style.display = "none"
}
let questions = [
    {
        "question": "1. Which language is primarily used for web development?",
        "options": [
            "Python",
            "JavaScript",
            "C++",
            "Java"
        ],
        "correctAnswer": "JavaScript"
    },
    {
        "question": "2. Who was the first person to step on the Moon?",
        "options": [
            "Neil Armstrong",
            "Buzz Aldrin",
            "Yuri Gagarin",
            "Michael Collins"
        ],
        "correctAnswer": "Neil Armstrong"
    },
    {
        "question": "3. What is the capital city of Australia?",
        "options": [
            "Sydney",
            "Melbourne",
            "Canberra",
            "Brisbane"
        ],
        "correctAnswer": "Canberra"
    },
    {
        "question": "4. Which data structure works on the principle of FIFO (First In, First Out)?",
        "options": [
            "Stack",
            "Queue",
            "Tree",
            "Graph"
        ],
        "correctAnswer": "Queue"
    },
    {
        "question": "5. Which element has the chemical symbol 'O'?",
        "options": [
            "Osmium",
            "Oxygen",
            "Gold",
            "Oxide"
        ],
        "correctAnswer": "Oxygen"
    }
    
    
]
