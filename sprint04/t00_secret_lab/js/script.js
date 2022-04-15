let lab  = document.querySelector("#lab");
let hero = document.querySelector("#hero");
let switcher = true;

function transformation(){
    if(switcher){
        lab.style.background = "#70964b";
        hero.innerHTML = "Hulk";
        hero.style.fontSize = "130px";
        hero.style.letterSpacing = "6px";
        
    }
    else{
        lab.style.background = "#ffb000";
        hero.innerHTML = "Bruce Banner";
        hero.style.fontSize = "60px";
        hero.style.letterSpacing = "2px";
    }
    switcher = !switcher;
}