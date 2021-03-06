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
    if (window.scrollY > document.body.offsetHeight/2) {
        openModal();
        window.removeEventListener("scroll",showModalByScroll)
    }
}

window.addEventListener('scroll', showModalByScroll)

closeBtn.addEventListener("click", closeModal)

modal.addEventListener("click", function(e){
    if (e.target == modal){
        closeModal();
    }
})

//mobile menu
let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".menu");

mobileMenu.addEventListener("click", function(){
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")){
        mainMenu.classList.add("active-menu");
    } else{
        mainMenu.classList.remove("active-menu")
    }
})

//contact us
let contactUsBtn = document.querySelector("#contact-us");
let contactUsModal = document.querySelector(".contact-modal-form");

function openContactUsModal(){
    contactUsModal.classList.toggle("hide");
    if(!contactUsModal.classList.contains("hide")){
        contactUsBtn.innerHTML = "Close";
    } else{
        contactUsBtn.innerHTML = "contact us";
    }
}

contactUsBtn.addEventListener("click", openContactUsModal);
