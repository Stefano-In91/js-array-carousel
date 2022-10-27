"use strict";

/* <div class="item" style="background-image: url(../img/01.jpg);"></div> */
// Array immagini + Length
const imgArr = [
   "img/01.jpg",
   "img/02.jpg",
   "img/03.jpg",
   "img/04.jpg",
   "img/05.jpg"
]
const imgArrLength = imgArr.length;
// Container immagini
const imgDestination = document.querySelector(".items");
// Creo immagini
for (let i = 0; i < imgArrLength; i++){
   let createDiv = document.createElement("div");
   imgDestination.append(createDiv);
   createDiv.classList.add("item");
   createDiv.style.backgroundImage = `url(../${imgArr[i]}`
}
// // Con template literal
// for (let i = 0; i < imgArrLength; i++){
//    let createItem = `<div class="item" style="background-image: url(../${imgArr[i]});"></div>`;
//    imgDestination.innerHTML += createItem;
// }

// Elemento attivo di base
const item = document.querySelectorAll(".item");
let activeNow = 0;
item[activeNow].classList.add("active");

// Pulsanti previous e next
const nextBtn = document.querySelector(".next i");
const prevBtn = document.querySelector(".previous i");
// Event Listener su click
nextBtn.addEventListener("click", function(){
   item[activeNow].classList.remove("active");
   if (activeNow < imgArrLength - 1) {
      activeNow++;
   } else {
      activeNow = 0;
   }  
   item[activeNow].classList.add("active");
})
prevBtn.addEventListener("click", function(){
   item[activeNow].classList.remove("active");
   if (activeNow > 0){
      activeNow--;
   } else {
      activeNow = imgArrLength - 1;
   }
   item[activeNow].classList.add("active");
})