const express = require('express')
const router = require("./mvc/routes/config")
class Server{ // classe tem inical maiuscula sempre
// a # dxa privado
    app
    port

    constructor(port){
        this.app = express() // armazena o express dentro do app
        this.port = port

        this.app.use(router)
        this.app.set("view engine", "ejs")
        this.app.set("views","mvc/views")
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Servidor Online...")
        })
    }
}

module.exports = new Server(3001)