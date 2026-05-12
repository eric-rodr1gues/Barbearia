class Usuario{

    #id
    #nome
    #email
    #senha
    

    constructor(nome, email, senha){
        this.#validarEmail(email)

        this.#nome = nome
        this.#email = email
        this.#senha = senha
    }

    get id(){
        return this.#id
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
    set id(valor){
        this.#id = valor
    }

    #validarEmail(email){
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        if(!pattern.test(email)){
           throw new Error("Email fora do padrão") 
        }
    }
}

module.exports = Usuario