let firstName = prompt();
let lastName  = prompt();


if(CheckValid(firstName) || CheckValid(lastName)){
    alert("Wrong input!");
}else{
    firstName = UpperLetter(firstName);
    lastName  = UpperLetter(lastName);

    alert(`Greeting, ${firstName} ${lastName}`);
}


function UpperLetter(Name){
    return Name.charAt(0).toUpperCase() + Name.slice(1);
}

function CheckValid(Name){
    var matches = Name.match(/\d+/g);
    if (matches != null) {
        return true;
    }
    
    if(!Name)
        return true;

    return false;
}
