let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscrool = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

document.onclick = function(e) {
    if (!menu.contains(e.target) && header.contains(e.target)) {
        menu.classList.remove('fa-times');
        header.classList.remove('active');
    }
}