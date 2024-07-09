const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

const switchMenu = () => {
    menu.classList.toggle("open");
}

burger.addEventListener('click', switchMenu);