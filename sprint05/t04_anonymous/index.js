module.exports.getAnonymous  = function(name, alias, affiliation) {
    return new class{

        constructor(){
            this.name = name;
            this.alias = alias;
            this.affiliation = affiliation;}

    }
}