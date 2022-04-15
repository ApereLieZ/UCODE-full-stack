let nameField = document.querySelector("#first-name");
let lastNameField = document.querySelector("#last-name");
let genderField = document.querySelector("#gender");
let ageField = document.querySelector("#age");
let caloriesField = document.querySelector("#colories");

let feedBtn = document.querySelector("#feed-btn");
let sleepBtn = document.querySelector("#sleep-btn");
let flyBtn = document.querySelector("#fly-btn");
let fightBtn = document.querySelector("#fight-btn");
let heroBtn = document.querySelector("#hero-btn");

let img = document.querySelector("#img");



let statement = document.querySelector('#statement');

let btns = [feedBtn, sleepBtn, heroBtn];

function ActivateBtn(){
    for(let i = 0; i < btns.length; i++){
        btns[i].disabled = false;
    }
}

function BecomeSuperHero(){
    if(a.calories < 500){
        statement.innerHTML = "I can`t ((";
    }
    else{
        a = new Superhero(a);
    }
    
}

function DisactiveBtn(){
    for(let i = 0; i < btns.length; i++){
        btns[i].disabled = true;
    }
}

function setName(){
    return prompt("input name");
}

function setLastName(){
    return prompt("Input Last name");    
}

function setGender(){
    return prompt("Input gender");
}

function setAge(){
    return Number(prompt("Input Age"));
}

function Onfeed(){    
    if(a.calories > 600){
        statement.innerHTML = "I am not hungry";
        return;
    }
    DisactiveBtn();
    statement.innerHTML = "NAM NAM";
    setTimeout(() => { 
        ActivateBtn();
        statement.innerHTML = "Done";
        a.feed(300);
    }, 3000);
    
}

function OnSleep(){
    a.sleepFor();
    DisactiveBtn();
    setTimeout(()=>{
        statement.innerHTML = "Awake";
        ActivateBtn();
    }, 5000)

}

function OnFly(){    
    
    DisactiveBtn();
    a.fly();
    setTimeout(() => { 
        ActivateBtn();
        statement.innerHTML = "Done";
    }, 3000);
    
}

function OnFight(){    
    
    DisactiveBtn();
    a.fightWithEvil();
    setTimeout(() => { 
        ActivateBtn();
        statement.innerHTML = "Done";
    }, 3000);
    
}

function SetHungri(){
    if(a.calories >= 200)
        a.feed(-200);
}

class Human{

    constructor(op){
        this.firstname = op.firstname;
        this.lastName = op.lastname;
        this.gender  =op.gender;
        this.age = op.age;
        this.calories = 500;
        this.init();
    }

    init(){
        nameField.innerHTML = this.firstname;
        lastNameField.innerHTML = this.lastName;
        genderField.innerHTML = this.gender;
        ageField.innerHTML = this.age;
        caloriesField.innerHTML = this.calories;
    }

    sleepFor() {
        statement.innerHTML = "I'm sleeping";
    }
    feed(value) {
        this.calories += value;
        this.init();
    }
}



class Superhero extends Human{
    constructor(ob){
        super(ob);
        img.src = "assets/images/SuperHero.gif";
        btns.push(fightBtn);
        btns.push(flyBtn);
        btns[btns.indexOf(heroBtn)].disabled = true;
        ActivateBtn();
    }

    fly(){
        statement.innerHTML = "Fly";
    }
    fightWithEvil(){
        statement.innerHTML = "Fighting...";
    }
}


let a = new Human({
    firstname : setName(),
    lastName : setLastName(),
    gender : setGender(),
    age : setAge()
});

feedBtn.onclick = Onfeed;
sleepBtn.onclick = OnSleep;
heroBtn.onclick = BecomeSuperHero;
flyBtn.onclick = OnFly;
fightBtn.onclick = OnFight;
setInterval(SetHungri, 5000);