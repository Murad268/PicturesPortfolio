const pictureShow = (pictureBlock, pictureSelector) => {
   const pictures = document.querySelectorAll(pictureSelector);
   const block = document.querySelectorAll(pictureBlock);
   block.forEach((item, i) => {
      let newSrc =  pictures[i].getAttribute("src").slice(0, -5) + `${(i+1)}-1.png`;
      let oldSrc =  pictures[i].getAttribute("src");
      const divs = item.querySelectorAll("div");
      item.addEventListener("mouseenter", () => {
         pictures[i].setAttribute("src", newSrc);
         divs.forEach(div => {
            if(!div.classList.contains("hit")) {
               div.style.display = "none"
            }
         })
      })
      item.addEventListener("mouseleave", () => {
         pictures[i].setAttribute("src", oldSrc)
         divs.forEach(div => {
            if(!div.classList.contains("hit")) {
               div.style.display = "block"
            }
         })
      })
   })
}
pictureShow(".sizes__item", '.sizes__item img')
export default pictureShow