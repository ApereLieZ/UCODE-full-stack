

class Avenger {
    constructor(name, alias, gender, age, powers, hp ) {
        this.alias = alias
        this.gender = gender
        this.heroName = name
        
        this.age = age
        this.powers = powers
        this.hp = +hp;
    }

    
}



module.exports.Avenger = Avenger;