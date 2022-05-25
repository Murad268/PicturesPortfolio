const modal = (triggersSelector, modalSelector) => {
   let gifteBtnClicked = false;
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
      if(item.classList.contains("btn-consultation")) {
         setTimeout(() => {
            modal.classList.add("active")
         }, 60000)
      }
      if(item.classList.contains("gift")) { 
            window.addEventListener("scroll", () => {
               if(gifteBtnClicked == false) {
                  if(window.scrollY+1 >= document.documentElement.scrollHeight-document.documentElement.clientHeight) {
                     document.body.style.paddingRight = scroll + "px";
                     document.body.style.overflow = "hidden";
                     modal.classList.add("active");
                     document.querySelector(".gift").style.right = (parseInt(elLeft) + scroll) + "px"
                     item.remove()
                     gifteBtnClicked = true;
                  }
               }
            })
      }
      item.addEventListener("click", () => {
         if(item.classList.contains("gift")) {
            item.remove()
            gifteBtnClicked = true;
         }
         if(!item.classList.contains("modal__close")) {
            document.body.style.paddingRight = scroll + "px";
            document.body.style.overflow = "hidden";
            modal.classList.toggle("active");
            if(document.querySelector(".gift")) {
               document.querySelector(".gift").style.right = (parseInt(elLeft) + scroll) + "px"
            }
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