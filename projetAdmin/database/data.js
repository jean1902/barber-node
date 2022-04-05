mysql = require('mysql')


let base = mysql.createConnection({
    
    host:'localhost',
    user:'root',
    password:'',
    database:'education'

})


module.exports=base;