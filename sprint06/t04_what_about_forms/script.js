let btn = document.querySelector("#btn-click");
let out = document.querySelector("#out")
let rad = document.getElementsByName('contact');

let toSend = true;
function checkBtn(){
    
    if(!rad[2].checked){
        toSend = false
    }else{
        toSend = true;
    }
}

btn.onclick = sendUser;

async function sendUser() {
    checkBtn();
    const response = await fetch("/user", { method: "POST", body: toSend});
    const responseText = await response.text();
    out.innerHTML = responseText;
}