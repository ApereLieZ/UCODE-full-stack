module.exports.checkDivision = function(beginRange = 1, endRange = 60){
    
        for(let i = beginRange; i <= endRange; ++i){
            let str = "";
            if(i % 2 == 0){
                str = `The number ${i} is divisible by 2`;
            }
            if(i % 3 == 0){
                if(str){
                    str += `, is divisible by 3`;
                }else{
                    str = `The number ${i} is divisible by 3`
                }
            }
            if(i % 10 == 0){
                if(str){
                    str += `, is divisible by 10`;
                }else{
                    str = `The number ${i} is divisible by 10`
                }
            }
            if(!str){
                str = `The number ${i} -`;
            }
            
            console.log(str);
    
        }
    }
