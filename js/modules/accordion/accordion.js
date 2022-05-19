const accordion = (triggersSelector, answersSelector) => {
   const triggers = document.querySelectorAll(triggersSelector);
   const answers = document.querySelectorAll(answersSelector);
   triggers.forEach((trigger, i) => {
      trigger.addEventListener("click", () => {
         trigger.classList.toggle("active")
         answers[i].classList.toggle("active")
         console.log(answers[i])

      })
   })
}  
accordion(".accordion__question", ".accordion__answer");
export default accordion