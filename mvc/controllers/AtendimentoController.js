class AtendimentoController{
    listar(rec, res){
        res.render("Atendimento/ListarView")
    }
    cadastrar(rec, res){
        res.render("Atendimento/CadastrarView")
    }
    cadastrarView(rec, res){
        res.render("Atendimento/CadastrarView")
    }
    excluir(rec, res){
        res.render("Atendimento/ExcluirView")
    }
    atualizar(rec, res){
        res.render("Atendimento/AtualizarView")
    }
    atualizarView(rec, res){
        res.render("Atendimento/AtualizarView")
    }
}

module.exports = new AtendimentoController()