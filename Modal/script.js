'use strict';
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let closeModal = document.querySelector(".close-modal");
let showModal = document.querySelectorAll(".show-modal");
function removePOPup(){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}
function addPOPup(){
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

for(let i =0; i<showModal.length;i++){
    showModal[i].addEventListener('click',addPOPup);
}

closeModal.addEventListener('click',removePOPup);

overlay.addEventListener('click',removePOPup);

document.addEventListener('keydown',function(e){
    if(e.key === 'Escape' && !modal.classList.contains("hidden")){
        removePOPup()
    }
    

})