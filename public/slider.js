const slider = document.getElementById("hero");
const btnRight = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const links = [
    "../public/images/slide1.jpg",
    "../public/images/slide2.jpg",
    "../public/images/slide3.jpg",
];
let index = 0;

// btnLeft.addEventListener("click",()=>{
//     slider.style.backgroundImage = `url(${links[index]})`;
//     index = (index +1) % links.length;
   
// })
// btnRight.addEventListener("click",()=>{
//     slider.style.backgroundImage = `url(${links[index]})`;
//     index = (index +1) % links.length;
    
// })






// setInterval(()=>{
//     slider.style.backgroundImage  = `url(${links[index]})`;
//     if(index === 0){
//         div1.classList.add("text-center");
//         div1.classList.remove("hidden");
//         div2.classList.add("hidden");
//         div3.classList.add("hidden");
//     }

//     else if(index ===1 ){
//         div2.classList.add("text-right");
//         div2.classList.remove("hidden");
//         div1.classList.add("hidden");
//         div3.classList.add("hidden");
//     }
//     else{
//         div3.classList.add("text-center");
//         div3.classList.remove("hidden");
//         div1.classList.add("hidden");
//         div2.classList.add("hidden");
//     }
//     index = (index +1) % links.length;
    
// },5000);
btnLeft.addEventListener("click", () => {
    index = (index - 1 + links.length) % links.length;
    updateSlider();
});

btnRight.addEventListener("click", () => {
    index = (index + 1) % links.length;
    updateSlider();
});

// Auto slider every 5 seconds
setInterval(() => {
    index = (index + 1) % links.length;
    updateSlider();
}, 5000);
function updateSlider() {
    slider.style.backgroundImage = `url(${links[index]})`;

    // Reset all text align classes (optional, but cleaner)
    div1.classList.remove("text-center", "text-right");
    div2.classList.remove("text-center", "text-right");
    div3.classList.remove("text-center", "text-right");

    if (index === 0) {
        div1.classList.add("text-center");
        div1.classList.remove("hidden");
        div2.classList.add("hidden");
        div3.classList.add("hidden");
    } else if (index === 1) {
        div2.classList.add("text-right");
        div2.classList.remove("hidden");
        div1.classList.add("hidden");
        div3.classList.add("hidden");
    } else {
        div3.classList.add("text-center");
        div3.classList.remove("hidden");
        div1.classList.add("hidden");
        div2.classList.add("hidden");
    }
}


// Initial display
updateSlider();
