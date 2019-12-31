module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render("admin/form_add_noticia", {validacao : {}, noticia : {}});
}

module.exports.noticias_salvar = function(application, req, res){

    var noticia = req.body;
    console.log(noticia);
    req.assert('titulo','Título é obrigatório').notEmpty();
    req.assert('resumo','Resumo é obrigatório').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor','Autor é obrigatório').notEmpty();
    req.assert('data_noticia','Data é obrigatório').notEmpty();//.isDate({format: 'DD-MM-YYYY'});
    req.assert('noticia','Noticia é obrigatório').notEmpty();

    var erros = req.validationErrors();
    var validacao;

    console.log(erros);

    if(erros){
        res.render("admin/form_add_noticia.ejs", {validacao : erros, noticia : noticia});
        return;
    }

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result){
        if (error){
            res.send(error);
            return;
            console.log("Deu errado");
        }
        res.redirect('/noticias');
        }); 

}