const correctAnswer = ['D', 'A', 'C', 'C', 'A'];

const form = document.querySelector('.Quiz-form');
const result = document.querySelector('.result');
const start = document.querySelector('.start-section');
const hide = document.querySelector('.hide');



start.addEventListener("click", () => {
    // Show the text when the button is clicked
    hide.style.display = "block";
  });


form.addEventListener('submit', function(e){
   e.preventDefault();

   let score = 0;

   const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    
    userAnswer.forEach(function(answer, index){
        if(answer === correctAnswer[index]){
            score += 20;
        }
    });
           // console.log(score);
     scrollTo(0,0);
     
     result.classList.remove('result');

    let output = 0;
    const timer = setInterval(function(){
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }
        else{
            output ++
        }
    }, 15);
});