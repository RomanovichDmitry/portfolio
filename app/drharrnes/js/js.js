'use strict'

let popup = document.querySelector('.popup-modal');
let overlayPopap = document.querySelector('.popup__owerlay');
let itemBtn = document.querySelectorAll('.item__btn');
let closePopup = document.querySelectorAll('.popup__close');
let catalogBtn = document.querySelectorAll('.catalog__btn');
let ero = document.querySelector('.ero-btn');
let evryday = document.querySelector('.evryday-btn');
let items = document.querySelectorAll('.item');


for(let btn of catalogBtn) {
    btn.addEventListener("click", function() {
        for(let item of items) {
            if(btn.value !== item.dataset.category){
                item.classList.add('hidden');
            } else {
                item.classList.remove('hidden');
            }
        }
    })
    }



ero.onclick = function() {
    evryday.classList.remove('catalog__btn--active')
    ero.classList.add('catalog__btn--active')
}
evryday.onclick = function() {
    ero.classList.remove('catalog__btn--active')
    evryday.classList.add('catalog__btn--active')
}

//Попап с корзиной


let showPopup = (evt) => {
 let target = evt.target;
        let titleItemText = this.querySelector('.item__name').textContent
        console.log(titleItemText);
    if(target.classList.contains('item__btn')){
        popup.style.display = "block"
        // popup.querySelector('.popup__name').textContent = this.querySelector('.item__name').textContent
    }
}

for(let item of items){
    item.addEventListener('click', showPopup)
}