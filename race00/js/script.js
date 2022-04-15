let numbers = document.querySelectorAll("button");

let prevInput = document.querySelector(".previous-operand");
let currentInput = document.querySelector(".current-operand");
let multiplyBtn = document.querySelector("#multiply_btn");

let flag = false;

for(let i = 0; i < numbers.length; i++){
    numbers[i].onclick = function(){
        onNumberClick(numbers[i].innerHTML);
    }
}

function calculate(str){
    str = str.replaceAll('×', '*');
    str = str.replaceAll('÷', '/');
    str = str.replaceAll('%', '/ 100');
    str = str.replaceAll('π',+ Math.PI);
    str = str.replaceAll('^', "**");
    str = str.replaceAll(/(\d+)!/g, (m, n) => factorial(+n));
    str = str.replaceAll(/√(\d+)/g, (m, n) => Math.sqrt(+n));

    

    
    let result = eval(str);
    result = parseInt(result * 100) / 100;
    return result;
}

function factorial(num) {
	if (num < 0){
    	return -1;
    }
    else if (num == 0){
    	return 1;
    }
    else {
    	return (num * factorial(num - 1));
   	}
}

function onResultPress(){
    try{
        let str = currentInput.innerHTML;
        let res = calculate(str);
        if(!isFinite(res) || isNaN(res)){
            console.log("EE");
            currentInput.innerHTML = "Error";
            setTimeout(cls, 1000);
            return;
        }

        currentInput.innerHTML = res;
        prevInput.innerHTML = str + "=" + res;
    }
    catch (error) {
        currentInput.innerHTML = "Error";
        setTimeout(cls, 1000);
    }
}

function cls(){
    currentInput.innerHTML  = ""
}

function PlusMinus(){
    let str = currentInput.innerHTML;
    let num = str.match(/-?[0-9]\d*(\.\d+)?$/)[0];
    console.log(num);
    let newNum = -Number(num);
    str =str.replace(num, newNum);
    currentInput.innerHTML = str;
}


function onNumberClick(i){

    if(i == "DEL"){
        currentInput.innerHTML = currentInput.innerHTML.slice(0,-1);
        return;
    }
        
    else if( i == "C"){
        currentInput.innerHTML = "0";
        prevInput.innerHTML = "";
        return;
    }
    else if(i == '='){
        flag = false;
        onResultPress();
        return;
    }


    if(currentInput.innerHTML.length >=20)
        return;
    switch (i) {
        case "+":
            if(!flag){
                flag = true;
                currentInput.innerHTML += i;
            }
            break;
        case "-":
            if(!flag){
                flag = true;
                currentInput.innerHTML += i;
            }
            break;
        case "±":
            PlusMinus();
            break;
            

        case "×":
            if(!flag){
                flag = true;
                currentInput.innerHTML += i;
            }
            break;
        case "÷":
            if(!flag){
                flag = true;
                currentInput.innerHTML += i;
            }
            break;

        case "x!":
            if(!flag){
                flag = true;
                currentInput.innerHTML += '!';
            }
            break;
        case ".":
            if(!flag){
                flag = true;
                currentInput.innerHTML += i;
            }
            break;
        case "x<sup>n</sup>":
            if(!flag){
                flag = true;
                currentInput.innerHTML += '^';
            }
            break;
        default:
            if(currentInput.innerHTML.length == 1 && currentInput.innerHTML == 0)
            currentInput.innerHTML = "";
            flag = false;
            currentInput.innerHTML += i;
            break;
    }
    
    
}