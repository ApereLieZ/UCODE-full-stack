const Model = require("./../model.js");

module.exports = class User extends Model{
    constructor(){
        super("users");
    }
    async getUser(login){
        const user =  await this.find({login: login});
        return user[0];
    }
}