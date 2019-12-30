module.exports = function(app) {

    app.get('/noticia', function(req, res){

        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

   noticiasModel.getNoticia(connection ,function(error, result){
        if (error){
            res.send(error);
            return;
            console.log("Deu errado");
        }
        res.render("noticias/noticia", {noticia : result});
        });

   
});
};