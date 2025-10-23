const slide = document.querySelector(".slide");
const images = document.querySelectorAll(".slide img");

//buttons
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")

//counter
let counter = 1;
const size = images[0].clientWidth;

slide.style.transform = 'translatex(' + (-size * counter) + 'px)';

//button listeners
next.addEventListener('click',()=>{
    if (counter >= images.length - 1) return;
    slide.style.transition = "transform 0.4s ease-in-out"
    counter++;
    slide.style.transform = 'translatex(' + (-size * counter) + 'px)';    
});

prev.addEventListener('click',()=>{
    if (counter <= 0) return;
    slide.style.transition = "transform 0.4s ease-in-out"
    counter--;
    slide.style.transform = 'translatex(' + (-size * counter) + 'px)';    
});

slide.addEventListener('transitionend', () => {
    if (images[counter].class === 'last'){
        slide.style.transition = "none";
        counter = images.length - 2;
        slide.style.transform = 'translatex(' + (-size * counter) + 'px)';
    }
    if (images[counter].class === 'first'){
        slide.style.transition = "none";
        counter = images.length - counter;
        slide.style.transform = 'translatex(' + (-size * counter) + 'px)';
    }
});