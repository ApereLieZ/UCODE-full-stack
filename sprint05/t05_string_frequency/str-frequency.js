module.exports = class StrFrequency{
    constructor(str){
        this.str = str;
    }
    letterFrequencies(){
        var map  = new Map();
        let tempStr = this.str.toUpperCase();
        for(let i of tempStr){
            if(!isNaN(i)) continue;
            if(map.has(i)){
                let temp = map.get(i);
                +temp++;
                map.set(i, temp);
            }else{
                map.set(i, 1);
            }
        }
        
        return Object.fromEntries(map);
    }

    wordFrequencies(){
        let tempStr = this.str.toUpperCase();
        let arrOfString = tempStr.split(/\s+/);
        
        var map = new Map();
        for(let i of arrOfString){
            if(!isNaN(i)) continue;
            if(map.has(i)){
                let temp = map.get(i);
                +temp++;
                map.set(i, temp);
            }else{
                map.set(i, 1);
            }
        }

        return Object.fromEntries(map);
    }
    
    reverseString(){
        let newString = "";
        for (var i = this.str.length - 1; i >= 0; i--) { 
            newString += this.str.charAt(i); 
        }
        return newString;
    }
}