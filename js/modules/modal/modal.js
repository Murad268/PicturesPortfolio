const modal = (triggersSelector, modalSelector) => {
   const triggers = document.querySelectorAll(triggersSelector);
   const modal = document.querySelector(modalSelector);
   const elLeft = window.getComputedStyle(document.querySelector(".gift"), null).getPropertyValue("right");
   let scroll = calcScroll();
   function calcScroll() {
      let paddingOffsett = window.innerWidth - document.body.offsetWidth
      return paddingOffsett;
   }
  
   calcScroll()
   triggers.forEach(item => {
      item.addEventListener("click", () => {
         if(item.classList.contains("gift")) {
            item.remove()
         }
         if(!item.classList.contains("modal__close")) {
            document.body.style.paddingRight = scroll + "px";
            document.body.style.overflow = "hidden";
            modal.classList.toggle("active");
            document.querySelector(".gift").style.right = (parseInt(elLeft) + scroll) + "px"
         } else {
            if(modal.classList.contains("active") ) {
               modal.classList.remove("active")
               document.body.style.paddingRight = '0px'
               document.querySelector(".gift").style.right = elLeft
            }
          
            document.body.style.overflow = ""
         }
      })
   })
}
modal(".btn-design", ".modal__design")
modal(".btn-consultation", ".modal__consultation")
modal(".gift", ".modal__gift")
modal(".modal__close", ".modal__design")
modal(".modal__close", ".modal__consultation")
modal(".modal__close", ".modal__gift")
export default modal;