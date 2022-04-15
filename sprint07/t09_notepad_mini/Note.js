const fs = require("fs");
const {join} = require("path");
module.exports = class Note{
    constructor(obj){
        this.obj = obj;

        try {
            if (!fs.existsSync(join(__dirname, "tmp"))) {
              fs.mkdirSync(join(__dirname, "tmp"));
            }
          } catch (err) {
            console.error(err)
          }
        fs.open(join(__dirname, "tmp",this.obj.name), 'w+', (err, file) => {
            if(err) throw err;
            console.log(`File ${this.obj.name} has been created `);
        })

        console.log(JSON.stringify(this.obj));
        fs.writeFileSync(join(__dirname, "tmp", this.obj.name),JSON.stringify(this.obj) , err => {
            if(err) throw err;
            console.log(`File ${this.obj.name} has been written`);
        })
        
    }
    static deleteNote(filename){
      
      try {
        fs.unlinkSync(join(__dirname, "tmp",filename));
        //file removed
      } catch(err) {
        console.error(err)
      }
    }
    static findNote(filename){
      try {
        const data = fs.readFileSync(join(__dirname, "tmp", filename), 'utf8')
        const dataJson = JSON.parse(data);
        return dataJson;
      } catch (err) {
        console.error(err)
      }
    }


}