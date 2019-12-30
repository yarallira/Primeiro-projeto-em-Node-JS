module.exports = function(){

    this.getNoticias = function(connection, callback){
        connection.query('SELECT * FROM noticias', callback);
    }

    this.getNoticia = function(connection, callback){
        connection.query('SELECT * FROM  noticias WHERE id_noticia = 3', callback);
    }

    this.salvarNoticia =  function(noticia ,connection, callback){
        connection.query('INSERT INTO noticias set ?', noticia, callback);
    }

    return this;
}