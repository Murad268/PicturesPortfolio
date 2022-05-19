const slider = (wrapperSelector, slidesSelector, innerSelector, direction) => {
   const wrapper = document.querySelector(wrapperSelector);
   const slides = document.querySelectorAll(slidesSelector);
   const inner = document.querySelector(innerSelector);
  
   if(direction == "horizontal") {
         const width = wrapper.clientWidth;
         const nextBtn = document.querySelector(".review__next");
         const prevBtn = document.querySelector(".review__prev");
         slides.forEach(item => item.style.width = (width + "px"));
         inner.style.width = slides.length * width;
         let offset = 0;
         const next = () => {
            if(offset < ((slides.length - 1) * width)) {
               offset += width;
            } else {
               offset = 0;
            }
         }
         const prev = () => {
            if(offset == 0) {
               offset = (slides.length - 1) * width
            } else {
               offset -= width
            }
         }
         nextBtn.addEventListener("click", () => {
            next()
            inner.style.transform = `translateX(-${offset}px)`
         })
         prevBtn.addEventListener("click", () => {
            prev()
            inner.style.transform = `translateX(-${offset}px)`
         })
        const time = setInterval(() => {
            next()
            inner.style.transform = `translateX(-${offset}px)`
         }, 4000)
         
         wrapper.addEventListener("mouseenter", () => {
            clearInterval(time)
         })
         wrapper.addEventListener("mouseleave", () => {
            const time = setInterval(() => {
               next()
               inner.style.transform = `translateX(-${offset}px)`
            }, 4000)
         })  
   } else {
      const height = wrapper.clientHeight;
      let offset = 0;
      const up = () => {
         if(offset < ((slides.length - 1) * height)) {
            offset += height;
         } else {
            offset = 0;
         }
      }
      const time = setInterval(() => {
         up()
         inner.style.transform = `translateY(-${offset}px)`
      }, 4000)
      wrapper.addEventListener("mouseenter", () => {
         clearInterval(time)
      })
      wrapper.addEventListener("mouseleave", () => {
         const time = setInterval(() => {
            up()
            inner.style.transform = `translateY(-${offset}px)`
         }, 4000)
      }) 
   }

}
slider(".review__wrapper", ".review__slide", ".review__inner", "horizontal")
slider(".header__adver__slides", ".header__adver__slide", ".header__adver__slider__inner", "vertical")
export default slider