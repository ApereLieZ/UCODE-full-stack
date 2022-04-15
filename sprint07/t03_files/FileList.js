const fs = require('fs');
const File = require('./File.js');
const {join} = require('path');

module.exports = class FileList {
    getList() {
        let dir = './tmp'
        let files = []
        fs.readdirSync(dir).forEach(file => {
            let data = fs.readFileSync('tmp/' + file, 'utf8')
            files.push({name: file, content: data})
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