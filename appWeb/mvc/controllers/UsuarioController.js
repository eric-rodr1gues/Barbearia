class Usuariocontroller{
    index(rec, res){
        res.render("Usuario/UsuarioView")
    }
}

module.exports = new Usuariocontroller()