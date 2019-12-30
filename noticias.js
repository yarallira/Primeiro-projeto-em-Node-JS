module.exports = function(app){

    app.get('/noticias', function(req, res){

        var mysql = require('mysql');

        var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'portal_noticias'
    });

    connection.query("SELECT * FROM pessoa", function(error, result){
        res.send(result);
        console.log(res)
        });

    //res.render("noticias/noticias");
   
});
};