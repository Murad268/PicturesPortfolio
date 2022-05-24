const newStyles = (triggerSelector, parentElement, spinnerSelector) => {
   const trigger = document.querySelector(triggerSelector);
   const parent = document.querySelector(parentElement);
   const spinner = document.querySelector(spinnerSelector);
   trigger.addEventListener("click", () => {
      spinner.style.display = "block";
      const getStyles = async (url) => {
         const res = await fetch(url)
         if(!res.ok) {
            console.log("error")
         }
         return await res.json()
   }
   setTimeout(()=> {
      getStyles('../../../db.json').then(res => {
         res.styles.forEach(item => {
            let element = document.createElement("div");
            let imgBlock = document.createElement("div");
            let img = document.createElement("img");
            let desc = document.createElement("div");
            let more = document.createElement("div");
            more.classList.add("popular__item__more");
            desc.classList.add("popular__item__desc");
            element.classList.add('popular__item');
            imgBlock.classList.add("popular__item__img");
            img.setAttribute("src", item.img);
            more.innerHTML = `<a href="">Подробнее</a>`
            desc.textContent = item.title;
            imgBlock.appendChild(img);
            element.appendChild(imgBlock);
            element.appendChild(desc);
            element.appendChild(more);
            parent.appendChild(element);
         })
     })
     trigger.remove()  
     spinner.style.display = "none";
   }, 500)
  
    
  })
}
newStyles(".popular__btn", ".popular__wrapper", '.load__spinner')
export default newStyles