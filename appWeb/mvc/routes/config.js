const { Router } =  require("express")
const Usuariocontroller = require("../controllers/UsuarioController")

const router = Router()

router.get("/user/index", Usuariocontroller.index)

module.exports = router