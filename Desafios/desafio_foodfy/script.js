const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        modalOverlay.classList.add('active')

        modalOverlay.querySelector(".modal > .modal-content > iframe.img").src = card.querySelector('.img_content > img').src;
        modalOverlay.querySelector(".modal > .modal-content > p.title").innerHTML = card.querySelector('.title_content > p').innerHTML;
        modalOverlay.querySelector(".modal > .modal-content > p.by").innerHTML = card.querySelector('.by_content > p').innerHTML;
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})