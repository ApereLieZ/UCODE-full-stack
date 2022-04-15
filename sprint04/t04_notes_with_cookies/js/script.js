let addBtn = document.querySelector("#add-coockies");
let clearBtn = document.querySelector("#Clear-coockies");

let textIn = document.querySelector("#text-in");
let textOut = document.querySelector('#text-out');

function addCoockies(){
    let text = textIn.value;
    if(text.length <= 0) return;
    document.cookie += `-->${text}`;
    textIn.value = "";
    updateCookies();
}

updateCookies();

function updateCookies(){
    textOut.value = "";
    textOut.value = document.cookie;
}



function clearCoockies(){
    document.cookie = "⠀";
    updateCookies();
}

addBtn.onclick = addCoockies;
clearBtn.onclick = clearCoockies;