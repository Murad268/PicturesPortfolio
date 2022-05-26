const forms = (formsSelector, inputSelector, textAreaSelector) => {
   const forms = document.querySelectorAll(formsSelector);
   const inputs = document.querySelectorAll(inputSelector);
   const textAreas = document.querySelectorAll(textAreaSelector);
   const phones = document.querySelectorAll('[type="phone"]');
   const textInputs = document.querySelectorAll('[type="text"]');
   const postData = async (url, data) => {
      const res = await fetch(url, {
         method: "POST",
         body: data
      })
      return await res.text();
   }
   
   $('input[name="phone').mask("+7 (999) 999-99-99");
   textInputs.forEach(input => {
      input.addEventListener('keypress', function(e) {
          if (e.key.match(/[^а-яё 0-9]/ig)) {
              e.preventDefault();
          }
      });
  });
   const messages = {
      loading: "./assets/images/spinner/spinner.gif",
      succesImg: "./assets/images/forms/img_400782-removebg-preview.png",
      errorImg: "../../../assets/images/forms/images-removebg-preview.png",
      succes: "Ваш запрос успешно отправлен. С вами свяжутся в ближайшее время",
      error: "Что-то пошло не так. Пожалуйста, повторите попытку позже"
   }
   forms.forEach(item => {
      item.addEventListener("submit", (e) => {
         e.preventDefault();
         const loading = document.createElement("img");
         loading.setAttribute("src", messages.loading);
         item.appendChild(loading);
         const modal = document.createElement("div");
         const modalBlock = document.createElement("div");
         const img = document.createElement("img");
         const p = document.createElement("p");
         modal.appendChild(modalBlock);
         modalBlock.appendChild(img);
         modalBlock.appendChild(p);
         document.querySelector("body").appendChild(modal);
         loading.classList.add("formModal__spinner");
         modal.classList.add("formModal");
         modalBlock.classList.add("formModal__block")
         const formData = new FormData(item);
         item.querySelector("button").disabled = true;
         document.body.style.overflow = "hidden";
         postData("./server.php", formData).then(res => {
            loading.remove();
            modal.style.opacity = 1;
            img.setAttribute("src", messages.succesImg);
            p.textContent = messages.succes;
         }).catch(() => {
            loading.remove();
            modal.style.opacity = 1;
            img.setAttribute("src", messages.errorImg);
            p.textContent = messages.error;
         }).finally(() => {
            setTimeout(() => {
               modal.remove();
               item.reset()
            }, 1000)
            document.body.style.overflow = "";
         
            item.querySelector("button").disabled = false;
            modal.style.opacity = 1;
         })
      })
   })
}
forms('form', "input");
export default forms