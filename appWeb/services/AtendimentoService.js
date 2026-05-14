const Atendimento = require("../mvc/models/AtendimentoModel");
const AtendimentoSchema = require("../schemas/AtendimentoSchema");
const UsuarioSchema = require("../schemas/UsuarioSchema");

class AtendimentoService {
    #atendimentoSchema

    constructor(){
        this.#atendimentoSchema = AtendimentoSchema;
    }

    async buscarAtendimento(id) {
        const dado = await this.#atendimentoSchema.findOne({
            where: { id: id },
            include: "users"
        });
        
        if(!dado){
            return null
        }

        const atendimento = new Atendimento(
            dado.nomeCliente,
            dado.telefone,
            dado.horario,
            dado.data,
            dado.dataNascimento,
            dado.tipoServico,
            dado.users.id
        )

        atendimento.id = dado.id

        return atendimento
    }

    async deletarAtendimento(id) {
        const atendimento = await this.#atendimentoSchema.findOne({
            where: { id: id }
        });
        const affectedRows = await atendimento.destroy()

        return affectedRows;
    }
    

    async buscarTodosAtendimentos(){

        const atendimentos = []
        const dados = await this.#atendimentoSchema.findAll({
            include: [{
                model: UsuarioSchema,
                as: "users"
            }]
        });

        for(const atendimento of dados){

            const a = new Atendimento(
                atendimento.nomeCliente,
                atendimento.telefone,
                atendimento.horario,
                atendimento.data,
                atendimento.dataNascimento,
                atendimento.tipoServico,
                atendimento.profissional
            )
            a.id = atendimento.id

            atendimentos.push(a)
        }

        return atendimentos

    }

    async cadastrarAtendimento(
        nomeCliente, 
        telefone, 
        horario, 
        data, 
        dataNascimento, 
        tipoServico, 
        profissional
    ){
        const atendimento = new Atendimento(
            nomeCliente, 
            telefone, 
            horario, 
            data, 
            dataNascimento, 
            tipoServico, 
            profissional)

        const a = await this.#atendimentoSchema.create({
            nomeCliente: atendimento.nomeCliente,
            telefone: atendimento.telefone,
            horario: atendimento.horario,
            data: atendimento.data,
            dataNascimento: atendimento.dataNascimento,
            tipoServico: atendimento.tipoServico,
            profissional: atendimento.profissional
        })

        return a;
    }

    async atualizarAtendimento(
        id,
        nomeCliente, 
        telefone, 
        horario, 
        data, 
        dataNascimento, 
        tipoServico, 
        profissional
    ){

        let rows = 0;
        
        const atendimento = await this.buscarAtendimento(id)

        if(atendimento){
            const model = new Atendimento(
                nomeCliente || atendimento.nomeCliente,
                telefone || atendimento.telefone,
                horario || atendimento.horario,
                data || atendimento.data,
                dataNascimento || atendimento.dataNascimento,
                tipoServico || atendimento.tipoServico,
                profissional || atendimento.profissional
            )

            const affectedRows = await this.#atendimentoSchema.update({
                nomeCliente: model.nomeCliente,
                telefone: model.telefone,
                horario: model.horario,
                data: model.data,
                dataNascimento: model.dataNascimento,
                tipoServico: model.tipoServico,
                profissional: model.profissional,
                usuarioId: model.profissional
            },{
                where: {
                    id: id
                }
            }
        )
        
            rows = affectedRows
    
        }
        return rows;
     
    }
}

module.exports = AtendimentoService;