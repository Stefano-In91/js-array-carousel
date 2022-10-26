"use strict";

/* <div class="item" style="background-image: url(../img/01.jpg);"></div> */
// Array immagini
const imgArr = [
   "img/01.jpg",
   "img/02.jpg",
   "img/03.jpg",
   "img/04.jpg",
   "img/05.jpg"
]
// Individuo container immagini
const imgDestination = document.querySelector(".items");
// Creo immagini, setto la prima come attiva
for (let i = 0; i < 5; i++){
   let createDiv = document.createElement("div");
   imgDestination.append(createDiv);
   createDiv.classList.add("item");
   createDiv.style.backgroundImage = `url(../${imgArr[i]}`
   if (i==0) {
      createDiv.classList.add("active");
   }
}


// Individuo pulsanti previous e next
const nextBtn = document.querySelector(".next i");
const prevBtn = document.querySelector(".previous i");
// Imposto elemento attivo di base
let activeNow = 0;
const activeItem = document.querySelectorAll(".item");
// Event Listener su click
nextBtn.addEventListener("click", function(){
   activeItem[activeNow].classList.remove("active");
   activeItem[++activeNow].classList.add("active");
})
prevBtn.addEventListener("click", function(){
   activeItem[activeNow].classList.remove("active");
   activeItem[--activeNow].classList.add("active");
})