class Atendimento{
    
    #id
    #nomeCliente
    #telefone
    #horario
    #data
    #dataNascimento
    #tipoServico
    #profissional

    constructor(nomeCliente, telefone, horario, data, dataNascimento, tipoServico, profissional){
        this.nomeCliente = nomeCliente
        this.telefone = telefone
        this.horario = horario
        this.data = data
        this.dataNascimento = dataNascimento
        this.tipoServico = tipoServico
        this.profissional = profissional
    }

    get id(){
        return this.#id;
    }

    set id(valor){
        this.#id = valor
    }

    get nomeCliente(){
        return this.#nomeCliente;
    }

    set nomeCliente(valor){
        this.#nomeCliente = valor
    }

    get telefone(){
        return this.#telefone;
    }

    set telefone(valor){
        this.#telefone = valor
    }

    get horario(){
        return this.#horario;
    }

    set horario(valor){
        this.#horario = valor
    }

    get data(){
        return this.#data;
    }

    set data(valor){
        this.#data = valor
    }

    get dataNascimento(){
        return this.#dataNascimento;
    }

    set dataNascimento(valor){
        this.#dataNascimento = valor
    }

    get tipoServico(){
        return this.#tipoServico;
    }

    set tipoServico(valor){
        this.#tipoServico = valor
    }

    get profissional(){
        return this.#profissional;
    }

    set profissional(valor){
        this.#profissional = valor
    }

}

module.exports = Atendimento