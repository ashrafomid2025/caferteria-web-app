const slider = document.getElementById("hero");
const btnRight = document.getElementById("btn-right");
const btnLeft = document.getElementById("btn-left");
const div1 = document.getElementById("div1")
const div2 = document.getElementById("div2")
const div3 = document.getElementById("div3")

const links = [
    "../public/images/slide1.jpg",
    "../public/images/slide2.jpg",
    "../public/images/slide3.jpg",
];
let index = 0;

btnLeft.addEventListener("click",()=>{
    slider.style.backgroundImage = `url(${links[index]})`;
    index = (index +1) % links.length;
   
})
btnRight.addEventListener("click",()=>{
    slider.style.backgroundImage = `url(${links[index]})`;
    index = (index +1) % links.length;
    
})






setInterval(()=>{
    slider.style.backgroundImage  = `url(${links[index]})`;
    index = (index +1) % links.length;
    if(index==1){
        div1.classList.remove("hidden");
        div1.classList.add("flex");
        div2.classList.add("hidden")
        div3.classList.add("hidden")
    }
    else if(index==2){
        div2.classList.remove("hidden");
        div2.classList.add("flex");
        div1.classList.add("hidden");
        div3.classList.add("hidden");
    }
    else{
        div3.classList.remove("hidden");
        div3.classList.add("flex");
        div1.classList.add("hidden");
        div2.classList.add("hidden");
    }
    
},5000);