const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

// Get the button element and attach a click event listener
const btn = document.getElementById('btn');

const quizItem = document.querySelectorAll(".quiz-item");
btn.addEventListener('click', () => {
   
    [...quizItem].forEach((item, index) => {
    
        const answers = quizes[index].answers;
     
        console.log( quizes[index].answers);
       
        const randomIndex = Math.floor(Math.random() * answers.length  );

        const radioButtons = item.querySelectorAll('input[type="radio"]');

       
        radioButtons[randomIndex].checked = true;
    });
});
