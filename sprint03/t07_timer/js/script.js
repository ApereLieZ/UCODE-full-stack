class Timer{
    timerId;
    constructor(title, delay, stopCount){
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
        this.cyclesLeft = stopCount;
    }
    
    start(){
        console.log(`Timer ${this.title} started (delay=${this.delay}, stopCount=${this.stopCount})`);
        this.timerId = setInterval(() => this.tick(), this.delay);
    }

    tick(){
        if(this.cyclesLeft > 0){
            this.cyclesLeft--;
            console.log(`Timer ${this.title} Tick!s | cycles left ${this.cyclesLeft}`)
            
        }else{
            this.stop();
        }
        
    }

    stop(){
        console.log(`Timer ${this.title} is stoped`)
        clearInterval(this.timerId);
    }
}

function runTimer(id, delay, counter){
    return new Timer(id, delay, counter).start();
}