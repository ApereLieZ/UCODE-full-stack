
class LinkedList{
    constructor(data){
        this.data = data;
        this.next = null;
    }
    add(value){
        let noda = this;
        while(noda.next){
            noda = noda.next;
        }
        noda.next = new LinkedList(value);
    }

    
    
    remove(value){
        let noda = this;
        while(noda){
            if(noda.data == value){
                this.data = this.next.data
                this.next = this.next.next
                return true;
            }
            noda = noda.next;
        }
        return false;
    }

    contains(value){
        let noda = this;
        while(noda){
            if(noda.data == value){
                return true;
            }
            noda = noda.next;
        }
        return false;
    }

    clear(){
        let noda = this

        while (noda) {
            delete noda.next.data
            noda.next = noda.next.next
        }

        delete this.data
        this.next = null
    }

    count(){
        let noda = this;
        let counter = 0;
        while (noda) {
            if(noda.data == undefined)
                return counter;
            counter++;
            noda = noda.next;
        }
        return counter;
    }
    
    log(){
        if (this.data == undefined) {
            return ""
        }

        let str = String(this.data)
        let noda = this.next
        while (noda) {
            str += ", " + noda.data;
            noda = noda.next;
        }

        console.log(str)
    }
    [Symbol.iterator]() {
        let noda = this

        return {
            next() {
                let value
                let done = true

                if (node !== null) {
                    value = node.data
                    done = false
                    node = node.next
                }

                return {
                    value: value, done: done
                }
            }
        }
    }
}

function createLinkedList(arr){
    let temp;
    if(arr.length >= 1){
        temp = new LinkedList(arr[0]);
        for(let i = 1; i < arr.length; i++){
            temp.add(arr[i]);
        }
    }
    return temp;
}