function Calculator(){

    this.init = (a)=>{
        this.result = a;
        return this;
    }
    this.add = (a) =>{
        this.result += a;
        return this;
    }
    this.mul = (a) =>{
        this.result *= a;
        return this;
    }
    this.div = (a) =>{
        this.result /= a;
        return this;
    }
    this.sub = (a) =>{
        this.result -= a;
        return this;
    }

    this.alert = () =>{
        setTimeout(() => alert(this.result), 5000);
        return this;
    }
}