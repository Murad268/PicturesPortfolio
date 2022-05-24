const calculate = (sizeSelector, materialSelector, servicesSelector, resultSelector, promocodeSelector) => {
   const size = document.querySelector(sizeSelector);
   const material = document.querySelector(materialSelector);
   const services = document.querySelector(servicesSelector);
   const result = document.querySelector(resultSelector);
   const promocode = document.querySelector(promocodeSelector);
   
   const change = (option, event) => {
      option.addEventListener(event, () => {
         if(+size.value != 0 && +material.value != 0) {
            result.textContent = +size.value * +material.value + +services.value + '  USD';
            if(promocode.value == "IWANTPOPART") {
               
               result.textContent = (parseInt(result.textContent) - parseInt(result.textContent)* 30 / 100) + ' USD'
            } 
         } else {
            result.textContent = "введите все нужные данные"
         }
       
      })
   } 
         change(size, "change")
         change(material, "change")
         change(services, "change")
         change(promocode, "input")
}  
calculate(".size", ".material", ".adServices", ".result", ".promocode");
export default calculate