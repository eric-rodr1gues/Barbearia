class Usuario{
    #email
    #senha
    #nome

    constructor(nome, email, senha){
        this.#validarEmail(email)

        this.#nome = nome
        this.#email = email
        this.#senha = senha
    }

    get email(){
        return this.#email
    }
    get senha(){
        return this.#senha
    }
    get nome(){
        return this.#nome
    }
    set email(valor){
        this.#email = valor
    }

    #validarEmail(email){
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        if(!pattern.test(email)){
           throw new Error("Email fora do padrão") 
        }
    }
}

module.exports = Usuario