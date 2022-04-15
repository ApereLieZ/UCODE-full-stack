let description = document.querySelector(".description");
let btns = document.querySelectorAll("button");
let nameOfFilm = document.querySelector("h2");
let image = document.querySelector("img");

let srcs = ["https://images-na.ssl-images-amazon.com/images/S/pv-target-images/00ca816ded5b28dc635af890c09012f170587b98ed7be3dea9689a4fc867d7fe._RI_V_TTW_.jpg",
"https://content2.rozetka.com.ua/goods/images/big/19479539.jpg",
"https://upload.wikimedia.org/wikipedia/ru/b/bc/Poster_Inception_film_2010.jpg"]


let descriptions = ["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint dolores exercitationem, officia asperiores excepturi error fugit beatae ea consequuntur pariatur ex ullam praesentium quod, ipsam incidunt dignissimos saepe earum quos.",
"или включения, учёта. Например, «да; проверено», «да; правильный ответ», «да; использовать», «исполнено/выполнено» и тому подобное. В избирательных бюллетенях для этих целей иногда используют крестик, но тот также может означать и «нет», «неверно». В некоторых популярных соцсетях «галочкой»",
"means that the bullet points will be outside the list item. The start of each line of a list item will be aligned vertically. This is default:"];
let names = ["John Wick", "Avangers", "Inception"];

for(let i = 0; i < btns.length; i++){
    btns[i].onclick = function() {
        switchData(i);
    };
}

function switchData(i){
    nameOfFilm.innerHTML = names[i];
    description.innerHTML = descriptions[i];
    image.src = srcs[i];
}