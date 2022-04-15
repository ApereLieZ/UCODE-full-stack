const mysql = require('mysql2')
const config = require('./config.json');



module.exports = async function connect(){
    return await mysql.createConnection(config)
};

// connection.end(function(err) {
//     if (err) throw err
//     console.log('Connection is closed!')
// })


