const questions =  document.querySelectorAll(".accordion-question");
questions.forEach((question) =>{
    question.addEventListener('click', () =>{
        const answer = question.nextElementSibling;

        document.querySelectorAll('.accordion-answer').forEach((ans) =>{
            if( ans !== answer){
                ans.classList.remove('active')
            }
        })
        answer.classList.toggle('active');
    })
})