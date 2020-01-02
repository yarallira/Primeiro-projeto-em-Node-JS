module.exports.noticias = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result){
        if (error){
            res.send(error);
            return;
            console.log("Deu errado");
        }
        res.render("noticias/noticias", {noticias : result});
        }); 
}

module.exports.noticia = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    var id_noticia = req.query;
    

noticiasModel.getNoticia(id_noticia, function(error, result){
    if (error){
        res.send(error);
        return;
        console.log("Deu errado");
    }
    res.render("noticias/noticia", {noticia : result});
    });
}