const mysql = require('./db.js')

module.exports = class Model {
    constructor(table){
        this.table = table;
    }
    async find(id){
        let con = await mysql();
        con.connect();
        try{
            const [rows, fields] = await con.promise().query(`SELECT * FROM ${this.table} WHERE id = ${id}`);
            console.log(rows);
            con.end();
        }catch(e){
            console.log(e);
            con.end();
        }
        
    }
    async delete(id){
        let con =await mysql();
        con.connect();
        try{
            const  [rows, fields] = await con.promise().query(`DELETE FROM ${this.table} WHERE id = ${id}`);
            con.end();
        }catch(e){
            console.log(e);
            con.end();
        }
    }
    async save(data){
        
        let keys = [];
        let con = await mysql();
        con.connect();
        if(data.id){
            let update = [];
            for(let key in data) {
                if(key !== "id") {
                    keys.push(key);
                    update.push(`${key}='${data[key]}'`);
                }
            }

            try {
                const res = await con.promise().query(`UPDATE ${this.table} SET ${update} WHERE id=${data.id};`);
                con.end();
            } catch (e) {
                console.log(e);
                con.end();
                return false;
            }
        }else{
            let values = [];
            for(let key in data) {
                if(key !== "id") {
                    keys.push(key);
                    values.push(`'${data[key]}'`);
                }
            }
            try{
                const res = await con.promise().query(`INSERT INTO ${this.table} (${keys}) VALUES (${values})`);
                con.end();
            }catch(e){
                console.log(e)
                con.end();
                return false;
            }
        }
        
        return true;
    }
}