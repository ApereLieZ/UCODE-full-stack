validator = {
    get: function(target, prop){
        console.log(`Trying to access the property ${prop} ...`)
        return prop in target? target[prop]: undefined;
    },
    set: function(target, prop, value){
        if(prop == "age"){
            if(!Number.isInteger(value)){
                throw new TypeError('The age is not an integer');
            }
            if(value < 0 || value > 200){
                throw new TypeError('The age is invalid');
            }
        }
        console.log(`Setting value '${value}' to '${prop}'`);
        target[prop] = value;

        return true;
    }
}