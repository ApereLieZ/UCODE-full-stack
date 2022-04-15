const fs = require('fs');
const {join} = require('path');


module.exports = class File{
    constructor(filename){
        this.filename = filename;
        try {
            if (!fs.existsSync(join(__dirname, "tmp"))) {
              fs.mkdirSync(join(__dirname, "tmp"));
            }
          } catch (err) {
            console.error(err)
          }
        fs.open(join(__dirname, "tmp",this.filename), 'w', (err, file) => {
            if(err) throw err;
            console.log(`File ${this.filename} has been created `);
        })
    }

    write(content){
        fs.appendFile(join(__dirname, "tmp",this.filename), content, err => {
            if(err) throw err;
            console.log(`File ${this.filename} has been written`);
        })
    }
}
