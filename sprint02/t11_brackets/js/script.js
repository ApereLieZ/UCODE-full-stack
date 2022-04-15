
function checkBrackets(str){
    if(typeof str !== 'string'){
        return -1;
    }
    let numOfOpen = 0;
    let numOfClose = 0;

    let nba=0

    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) == ')'){
            if(numOfOpen == 0){
                nba++;
            }else{
                numOfClose++;
            }

        }
        else if(str.charAt(i) == '('){
            numOfOpen++;
        }
            
        
            
    }
    if(numOfClose == 0 && numOfOpen == 0 && nba == 0){
        return -1;
    }

    if(numOfClose > numOfOpen){
        return numOfClose - numOfOpen + nba;
    }
    else{
        return numOfOpen - numOfClose  + nba;
    }
}
