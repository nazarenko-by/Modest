//modal
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")

let scrollPosition = 0;
let ticking = false;


function openModal() {
    modal.classList.add("show")
    modal.classList.remove("hide")
}

function closeModal(){
    modal.classList.add("hide")
    modal.classList.remove("show")
}

function showModalByScroll(){
    if (!ticking && window.scrollY > document.body.offsetHeight/2) {
        openModal();
        ticking = true;
    }
}

window.addEventListener('scroll', showModalByScroll)

closeBtn.addEventListener("click", closeModal)

modal.addEventListener("click", function(e){
    if (e.target == modal){
        closeModal();
    }
})
