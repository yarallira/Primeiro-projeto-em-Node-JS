module.exports = function(application) {

    application.get('/noticias', function(req, res){

        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function(error, result){
            if (error){
                res.send(error);
                return;
                console.log("Deu errado");
            }
            res.render("noticias/noticias", {noticias : result});
            });   
        });
};