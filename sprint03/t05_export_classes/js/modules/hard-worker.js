class HardWorker {

    constructor(age, salary, name) {
        this.name = name;
        this._age = age;
        this._salary = salary;
    }

    set age(value) {
        if(value >= 1 && value < 100) {
            this._age = value;
        }
    }
    set salary(value) {
        if(value >= 100 && value < 10000) {
            this._salary = value;
        }
    }

    get age() {
        return this._age;
    }
    get salary() {
        return this._salary;
    }

    toObject() {
        return {
            name: this.name,
            age: this._age,
            salary: this._salary
        }
    }

}

export {HardWorker};