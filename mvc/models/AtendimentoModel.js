class Atendimento{
    
    nomeCliente
    telefone
    horario
    data
    dataNascimento
    tipoServico
    profissional

    constructor(nomecliente, telefone, horario, data, dataNascimento, tipoServico, profissional){
        this.nomeCliente = nomeCliente
        this.telefone = telefone
        this.horario = horario
        this.data = data
        this.dataNascimento = dataNascimento
        this.tipoServico = tipoServico
        this.profissional = profissional
    }
}

module.exports = Atendimento