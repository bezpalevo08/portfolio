const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

const switchMenu = () => {
    menu.classList.toggle("open");
    burger.classList.toggle("active");
}

burger.addEventListener('click', switchMenu);