const fs = require('fs');
const {join} = require('path');

module.exports = class NotePad {


    getList() {
        let dir = './tmp'
        let files = []
        fs.readdirSync(dir).forEach(file => {
            let data = fs.readFileSync('tmp/' + file, 'utf8');
            let obj = JSON.parse(data);
            let jsonObj = {name: obj.name, date: obj.date};
            files.push(jsonObj);
            
        })
        return files
    }
    hasFiles() {
        return fs.existsSync('./tmp')
    }
    getHTMLList() {
        return this.getList()
    }

    
}