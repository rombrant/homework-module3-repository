const humMenu = document.querySelector('.burger-menu');
const main = document.querySelector('.main');
const nav = document.querySelector('.nav');
const socials = document.querySelector('.socials');
const popup = document.createElement('div');
const closedBtn = document.createElement('button');
const hedaer = document.querySelector('.header');
closedBtn.className = 'burgers-menu-closed';
popup.className = 'popup-menu';



humMenu.addEventListener('click', e => {
    const reqHeight = main.children[1].getBoundingClientRect().height;
    popup.style.height = reqHeight+'px';
    let op = 0.1;
    main.appendChild(popup);
    setTimeout (function foo(){
        if (op < 1) {
            op += 0.1;
            popup.style.opacity= op;
            setTimeout (foo, 50);
        }
    }, 50);
    setTimeout (function (){
        nav.classList.add('popup');
        socials.classList.add('popup');
        popup.appendChild(closedBtn);
        popup.appendChild(nav);
        popup.appendChild(socials);
    }, 500);
})

closedBtn.addEventListener('click', e => {
    let op = 1;
        setTimeout (function doo(){
            if (op > 0) {
                op -= 0.1;
                popup.style.opacity= op;
                setTimeout (doo, 50);
            }
        },50)
    setTimeout (function (){
        hedaer.appendChild(socials);
        main.removeChild(popup);
        socials.classList.remove('popup');
        nav.classList.remove('popup');
    }, 1000);
})