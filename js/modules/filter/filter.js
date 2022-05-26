const filter = (allContentSelector, btnSelector, contentSelector, btnsSelector) => {
  const all = document.querySelectorAll(allContentSelector);
  const btn = document.querySelector(btnSelector);
  const content = document.querySelectorAll(contentSelector);
  const btns = document.querySelectorAll(btnsSelector);
  
  btn.addEventListener("click", (e) => {
      document.querySelector(".portfolio__snipper").style.display = "block"
      btns.forEach(item => {
         item.classList.remove("active")
      })
      e.target.classList.add("active")
      all.forEach(item => {
         item.style.display = "none"
      })
      document.querySelector(".portfolio__empty").style.display = "none"
      setTimeout(() => {
         if(e.target.classList.contains("forGranmaBtn") || e.target.classList.contains("forGranpaBtn")) {
            document.querySelector(".portfolio__empty").style.display = "flex"
         }
         content.forEach(item => {
            item.style.display = "block"
      })
      document.querySelector(".portfolio__snipper").style.display = "none"
      }, 100)
  })
  
}
filter(".portfolio__content", ".allBtn", ".portfolio__content", ".portfolio__tab");
filter(".portfolio__content", ".loveBtn", ".love", ".portfolio__tab");
filter(".portfolio__content", ".forBossBtn", ".forBoss", ".portfolio__tab");
filter(".portfolio__content", ".forGirlsBtn", ".forGirls", ".portfolio__tab");
filter(".portfolio__content", ".forBoysBtn", ".forBoys", ".portfolio__tab");
filter(".portfolio__content", ".forGranmaBtn", ".forGranma", ".portfolio__tab");
filter(".portfolio__content", ".forGranpaBtn", ".forGranpa", ".portfolio__tab");
export default filter