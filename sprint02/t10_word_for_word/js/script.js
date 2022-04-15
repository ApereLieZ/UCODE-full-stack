
function MakeUniqArray(a){
    let uniqueArray = a.filter(function(item, pos) {
        return a.indexOf(item) == pos;
    })
    return uniqueArray;
}

function addWords(obj, wrds){
    let arr = obj.words.split(/(\s+)/).filter( e => e.trim().length > 0);
    let wrdsArr = wrds.split(/(\s+)/).filter( e => e.trim().length > 0);
    arr = MakeUniqArray(arr);

    for(let i = 0; i < wrdsArr.length; i++){
        let flag = true;
        for(let j = 0; j < arr.length; j++){
            if(wrdsArr[i] == arr[j])
                flag = false;
        }
        if(flag)
            arr.push(wrdsArr[i]);
    }
    

    obj.words = arr.join(" ");
}

function removeWords(obj, wrds){
    let arr = obj.words.split(/(\s+)/).filter( e => e.trim().length > 0);
    let wrdsArr = wrds.split(/(\s+)/).filter( e => e.trim().length > 0);

    arr = MakeUniqArray(arr);
    for(let i = 0; i < wrdsArr.length; i++){
        let flag = false;
        for(let j = 0; j < arr.length; j++){
            if(wrdsArr[i] == arr[j])
                flag = true;
        }
        if(flag){
            let index = arr.indexOf(wrdsArr[i]);
            arr.splice(index, 1);
        }
            
    }
    obj.words = arr.join(" ");
}

function changeWords(obj, oldWrds, newWrds){
    let arr = obj.words.split(/(\s+)/).filter( e => e.trim().length > 0);
    let oldwrdsArr = oldWrds.split(/(\s+)/).filter( e => e.trim().length > 0);
    let newWrdsArr = newWrds.split(/(\s+)/).filter( e => e.trim().length > 0);
    

    for (let i = 0; i < oldwrdsArr.length; i++) {
        let item = oldwrdsArr[i]

        arr.splice(arr.indexOf(item), i)
        
    }
    for (let i = 0; i < newWrdsArr.length; i++) {
        arr.push(newWrdsArr[i])
    }
    arr = MakeUniqArray(arr);
    obj.words = arr.join(" ")

}
