function NoticiasDAO(connection){
        this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * FROM noticias', callback);
    }

    NoticiasDAO.prototype.getNoticia = function(callback){
        this._connection.query('SELECT * FROM  noticias WHERE id_noticia = 3', callback);
    }

    NoticiasDAO.prototype.salvarNoticia =  function(noticia , callback){
        console.log(noticia);
        this._connection.query('INSERT INTO noticias set ?', noticia, callback);
    }

    NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
        this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
    }

module.exports = function(){

    return NoticiasDAO;
}