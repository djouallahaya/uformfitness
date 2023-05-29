const btn = document.querySelectorAll('.btn-modal');
const modal = document.querySelector('.bloc-modal');
const close = document.querySelector('.close');
const index = document.querySelector('.bloc-modal img');

Btns.forEach(btn => {
    btn.addeventlistener ('click',(e)=>{
        index.src = `img/equip-${e.target.getAttribute('data-index')}.png`;
modal.classList.add('active-modal');

    })
    
}) 
close.addeventlistener('click',()=>{
    modal.classList.remove('active-modal');

} )

