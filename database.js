const {createPool} = require('mysql');

const db = createPool({
    host : 'localhost',
    user : 'root',
    password: "",
    database : 'demo-node',
    connectionLimit : 15
});
module.exports ={db}