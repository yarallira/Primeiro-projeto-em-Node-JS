var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexão com db foi estabelecida');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'portal_noticias'
    });
}


module.exports = function () {
    console.log('O autoloaf carregou o módulo de conexão com o banco de dados');
    return connMySQL;
}
