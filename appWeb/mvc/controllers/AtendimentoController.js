const AtendimentoService = require("../../services/AtendimentoService");
const UsuarioService = require("../../services/UsuarioService");

class AtendimentoController{
    constructor() {
        this.atendimentoService = new AtendimentoService()
        this.usuarioService = new UsuarioService()
    }

    async atendimentoListView(req, res){
        const atendimentos = await this.atendimentoService.buscarTodosAtendimentos()
        res.render("Atendimento/Listview", { atendimentos: atendimentos})
    }

    async atendimentoCreateView(req, res){

        const usuarios = await this.UsuarioService.buscarTodosUsuarios()

        res.render("Atendimento/CreateView", { usuarios: usuarios})
    }

    async atendimentoEditView(req, res){
        const atendimento = await this.atendimentoService.buscarAtendimento(req.params.id)
        const usuarios = await this.UsuarioService.buscarTodosUsuarios()
        res.render("Atendimento/EditView", {atendimento: atendimento, usuarios: usuarios})
    }

    async atendimentoPostAsync(req, res){
        const atendimento = await this.atendimentoService.cadastrarAtendimento(
            req.body.nomeCliente,
            req.body.telefone,
            req.body.horario,
            req.body.data,
            req.body.dataNascimento,
            req.body.tipoServico,
            req.body.profissional
        )

        res.json({ atendimento: atendimento })
    }

    async atendimentoDeleteAsync(req, res){
        const affectedRows = await this.atendimentoService.deletarAtendimento(req.params.id)

        res.json({ affectedRows: affectedRows })
    }

    async atendimentoPutAsync(req, res){
        const affectedRows = await this.atendimentoService.atualizarAtendimento(
            req.body.id,
            req.body.nomeCliente,
            req.body.telefone,
            req.body.horario,
            req.body.data,
            req.body.dataNascimento,
            req.body.tipoServico,
            req.body.profissional
        )

        res.json({ affectedRows: affectedRows })
    }
}

module.exports = new AtendimentoController()