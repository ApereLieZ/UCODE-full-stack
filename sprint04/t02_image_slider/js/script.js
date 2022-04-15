let currentSlider = 0;
let flag = true;
showSliders(0);


function moveSlides(n){
    showSliders(currentSlider += n);
    flag=false;
}


function showSliders(n){
    
    let slides = document.getElementsByClassName("mySlides");
    if(n >= slides.length) {currentSlider = 0}
    if(n < 0 ) currentSlider = slides.length - 1;
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    console.log(currentSlider);
    slides[currentSlider].style.display = "block";
    console.log("asd");
}

function autoMoveSlides(){
    if(flag){
        showSliders(++currentSlider);
    }else{
        flag = true;
    }
}

    setInterval(() => autoMoveSlides(), 5000)
