const Atendimento = require("../mvc/models/AtendimentoModel");
const AtendimentoSchema = require("../schemas/AtendimentoSchema");

class AtendimentoService {
    #atendimentoSchema

    constructor(){
        this.#atendimentoSchema = AtendimentoSchema;
    }
    async listar() {
        return await this.#atendimentoSchema.findAll();
    }
    async buscarId(id){
        return await this.#atendimentoSchema.findOne({
            where: {id}
        })
    }
    async criar(dados){
        return await this.#atendimentoSchema.create(dados)
    }
    async excluir(id){
        return await this.#atendimentoSchema.destroy({
            where: {id}
        })
    }
    async buscarUsuario(usuario){
        return await this.#atendimentoSchema.findAll({
            where: {nomeCliente}
        })
    }
}

module.exports = AtendimentoService;