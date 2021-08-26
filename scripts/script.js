const burger = document.getElementById('burger')
const menu = document.querySelector('.menu')

burger.addEventListener("click", () => {

    burger.classList.toggle('active')
    menu.classList.toggle('active')

    if (menu.classList.contains('active')) {
        menu.style.maxHeight = menu.scrollHeight + "px";
    } else {
        menu.removeAttribute("style");
    }

})