class Team {
    constructor(id, avengers){
        this.id = id;
        this.avengers = avengers;
    }

    battle(o){
        for(let i = 0; i < this.avengers.length; i++){
            this.avengers[i].hp = this.avengers[i].hp  - o.damage;
            
            if(this.avengers[i].hp <= 0){
                this.avengers.splice(i, 1);
            }
                
        }
    }

    clone() {
        return Object.assign(Object.create(this), JSON.parse(JSON.stringify(this)));
    }

    calculateLosses(clonedTeam){
        if(this.id != clonedTeam.id){
            console.log("Incorrect team")
            return;
        }
        let num = clonedTeam.avengers.length - this.avengers.length;
        if(num == 0){
            console.log("We haven't lost any one in this battle!");
        }else{
            console.log(`In this battle we lost ${num+1} Avengers.`);
        }
    }

}

module.exports.Team = Team;