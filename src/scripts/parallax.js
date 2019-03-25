

const parallax = document.querySelector('.parallax__list');
const layers = parallax.children;
const info = document.querySelector('.info');

function moveLayersDeppendOnScroll(wScroll){
    Array.from(layers).forEach(layer =>{
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 50;


        layer.style.transform = `translateY(-${strafe}%)`;
        
    })
    const speed = info.dataset.speed;
    const changePos = wScroll * speed / 50;
    info.style.transform = `translateY(-${changePos}%)`;
}

window.addEventListener('scroll', e =>{
    const wScroll = window.pageYOffset;
    moveLayersDeppendOnScroll(wScroll);

})