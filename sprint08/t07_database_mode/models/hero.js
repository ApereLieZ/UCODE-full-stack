const Model = require("./../model.js");

module.exports = class Hero extends Model{
    
    constructor() {
        super("heroes");
    }
}