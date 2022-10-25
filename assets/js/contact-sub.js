const subMenu =  document.querySelectorAll(".sub-menu");
for(let i=0; i<subMenu.length; i++){
    subMenu[i].addEventListener("click", function(){
        if(window.innerWidth<992){
            const subMenu2 = this.nextElementSibling;
            const height = subMenu2.scrollHeight;

        if(subMenu2.classList.contains("desplegar")){
            subMenu2.classList.remove("desplegar");
            subMenu2.removeAttribute("style");
        } else {
            subMenu2.classList.add("desplegar");
            subMenu2.style.height = height + "px";
        }        
        }
    });
}