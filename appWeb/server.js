const express = require('express')

class Server{ // classe tem inical maiuscula sempre
// a # dxa privado
    app
    port

    constructor(port){
        this.app = express() // armazena o express dentro do app
        this.port = port
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Servidor Online...")
        })
    }
}

module.exports = new Server(3001)