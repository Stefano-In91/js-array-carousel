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
const imgArrLength = imgArr.length;
// Individuo container immagini
const imgDestination = document.querySelector(".items");
// Creo immagini
for (let i = 0; i < imgArrLength; i++){
   let createDiv = document.createElement("div");
   imgDestination.append(createDiv);
   createDiv.classList.add("item");
   createDiv.style.backgroundImage = `url(../${imgArr[i]}`
}
// // Oppure con template literal
// for (let i = 0; i < imgArrLength; i++){
//    let item = `<div class="item" style="background-image: url(../${imgArr[i]});"></div>`;
//    imgDestination.innerHTML += item;
// }

// Imposto elemento attivo di base
const activeItem = document.querySelectorAll(".item");
let activeNow = 0;
activeItem[activeNow].classList.add("active");

// Individuo pulsanti previous e next
const nextBtn = document.querySelector(".next i");
const prevBtn = document.querySelector(".previous i");

// Event Listener su click
nextBtn.addEventListener("click", function(){
   activeItem[activeNow].classList.remove("active");
   if (activeNow < imgArrLength - 1) {
      activeItem[++activeNow].classList.add("active");
   } else {
      activeItem[0].classList.add("active");
      activeNow = 0;
   }   
})
prevBtn.addEventListener("click", function(){
   activeItem[activeNow].classList.remove("active");
   if (activeNow > 0){
      activeItem[--activeNow].classList.add("active");
   } else {
      activeItem[4].classList.add("active");
      activeNow = 4;
   }
})