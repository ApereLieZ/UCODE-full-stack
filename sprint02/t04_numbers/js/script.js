let begin = prompt();
let end   = prompt();

function checkDivision(beginRange, endRange){
    
    for(let i = beginRange; i <= endRange; ++i){
        let str = "";
        if(i % 2 == 0){
            str = `${i} is even`;
        }
        if(i % 3 == 0){
            if(str){
                str += `, a multiple of 3`;
            }else{
                str = `${i} is a multiple of 3`
            }
        }
        if(i % 10 == 0){
            if(str){
                str += `, a multiple of 10`;
            }else{
                str = `${i} is a multiple of 10`
            }
        }
        if(!str){
            str = `${i} -`;
        }
        
        console.log(str);

    }
}



checkDivision(begin, end);