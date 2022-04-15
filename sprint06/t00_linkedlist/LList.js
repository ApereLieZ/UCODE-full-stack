const LLData = require('./LLData.js');
class LList{
    

    constructor(){
        this.node = new LLData(null);
    }

    add(value){
        let temp = this.node;
        if(!temp.data){
            temp.data = value;
            return;
        }
        while(temp.next){
            temp = temp.next;
        }
        temp.next = new LLData(value);
    }

    addFromArray(arr){
        let temp = this.node;
        if(!arr || arr.length == 0){
            return;
        }

        for(let i of arr){
            this.add(i);
        }
        
    }

    remove(value){
        let temp = this.node;
        if(!temp.data)
            return false;
        let prev = temp;
        while(temp){
            if(temp.data == value){
                if(!temp.next){
                    
                    prev.next =null;
                }else{
                    temp.data = temp.next.data
                    temp.next = temp.next.next
                    
                }
                return true;
                
            }
            prev = temp;
            temp = temp.next;
        }
        return false;
    }

    removeAll(value){
        while(this.remove(value));
    }

    contains(value){
        if(this.node.data == null)
            return false;
        let temp = this.node;
        while(temp){
            if(temp.data == value)
                return true;
            temp = temp.next;
        }
        return false;
    }

    getFirst(){
        return this.node.data;
    }

    getLast(){
        if(this.node.data == null) return null;
        let temp = this.node;
        while(temp.next){
            temp = temp.next;
        }
        return temp.data;
    }

    toString(){
        let str = "";
        if(this.node.data == null){
            console.log("");
            return;
        }
        str+= this.node.data;
        let temp = this.node.next;
        while(temp){
            str += ', ' + temp.data;
            temp = temp.next;
        }

        console.log(str);

    }

    [Symbol.iterator] = function(){
        let temp = this.node;

        return {
            next: function(){
                if(temp){
                    let data = temp.data;
                    temp = temp.next;
                    return {value: data, done: false};
                }
                return{done:true};
            }
        }
    }

    filter(callback){
        let temp = new LList();
        for(let i of this){
            if(callback(i)){
                temp.add(i);
            }
        }
        return temp;
    }

    getIterator(){
        return this[Symbol.iterator];
    }

    clear(){
        let temp = this.node;
        if(temp.data == null) return;
        let delTemp;
        while(temp){
            delete temp.data;
            temp = temp.next;
            
        }
        delete this.node.data;
        this.node = null;
        
    }

    count(){
        let temp = this.node;
        if(temp.data === null) return 0;
        if(temp.next === null) return 1;
        let counter = 0;
        while(temp){
            counter++
            temp = temp.next;
        }
        return counter;
    }

}
module.exports = {LList};