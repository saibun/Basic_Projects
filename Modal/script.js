'use strict';
let hidden = document.querySelector(".hidden");
let overlay = document.querySelector(".overlay");
let closeModal = document.querySelector(".close-modal");
let showModal = document.querySelectorAll(".show-modal");
function addHidden(){
    hidden.classList.add("hidden");
    overlay.classList.add("hidden");
}
function removeHidden(){
    hidden.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

for(let i =0; i<showModal.length;i++){
    showModal[i].addEventListener('click',removeHidden);
}

closeModal.addEventListener('click',addHidden);

overlay.addEventListener('click',addHidden);