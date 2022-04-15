function main(){
    let animalName = prompt("What animal is the superhero most similar to?");
    if(!nameCheck(animalName)){
        main();
    }
    let gender = prompt('Is the superhero male or female? Leave blank if unknown or other.');
    if(!genderCheck(gender)){
        main();
    }
    let age = prompt('How old is the superhero?');
    if(!ageCheck(age)){
        main();
    }
    MakeName(animalName, gender, age);
    
}

function nameCheck(name){
    let regular = RegExp(/^[a-zA-Z]+$/);
    if (name.length > 20 || !regular.test(name)) {
        alert('ERROR: Accepts only one word, which consists only of Latin letters and its length does not exceed 20 characters.');
        return false;
    }
    return true;
}

function genderCheck(gender){
    let regular = RegExp(/^male$|^female$|^$/, 'i')

    if (!regular.test(gender)) {
        alert('ERROR: Accepts only male, female gender or blank (not case sensitive)!');
        return false;
    }
    return true;
}

function ageCheck(age){
    let regular = RegExp(/^[1-9]|[0-9]{0,4}$/)

    if (age.length > 5 || !regular.test(age)) {
        alert('ERROR: Accepts only digits, cannot start with a zero, no more than 5 characters!');
        return false;
    }
    return true;
}

function MakeName(animalName, gender, age){
    let spec;
    if (RegExp('^male$', 'i').test(gender) && age < 18) {
        spec = "boy";
    }
    else if (RegExp('^male$', 'i').test(gender) && age >= 18) {
        spec = "man";
    }
    else if (RegExp('^female$', 'i').test(gender) && age < 18) {
        spec = "girl";
    }
    else if (RegExp('^female$', 'i').test(gender) && age >= 18) {
        spec = "woman";
    }
    else if (RegExp('^$').test(gender) && age < 18) {
        spec = "kid";
    }
    else if (RegExp('^$').test(gender) && age >= 18) {
        spec = "hero";
    }

    alert(`The superhero name is: ${animalName}-${spec}!`);
    return;
}

main();