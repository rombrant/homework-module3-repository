

const parallax = document.querySelector('.parallax__list');
const layers = parallax.children;

function moveLayersDeppendOnScroll(wScroll){
    Array.from(layers).forEach(layer =>{
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 50;


        layer.style.transform = `translateY(-${strafe}%)`;
        
    })
}

window.addEventListener('scroll', e =>{
    const wScroll = window.pageYOffset;
    moveLayersDeppendOnScroll(wScroll);
    console.log(wScroll);
})