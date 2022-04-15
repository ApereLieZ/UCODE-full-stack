class ExtendableFunc extends Function {
    constructor() {
        super('...args', 'return this.self.call(...args)')

        return this.self = this.bind(this)
    }
}

class Avenger extends ExtendableFunc {
    constructor({ name, alias, gender, age, powers }) {
        super()
        this.alias = alias
        this.gender = gender
        this.heroName = name
        
        this.age = age
        this.powers = powers
    }

    call() {
        return `${this.alias.toUpperCase()}\n` + this.powers.join('\n');
    }
    toString() {
        return `name: ${this.heroName}\n` +
            `gender: ${this.gender}\n` +
            `age: ${this.age}`
    }
}



module.exports.Avenger = Avenger;