const { Router } =  require("express")
const UsuarioController = require("../controllers/UsuarioController")
const AtendimentoController = require("../controllers/AtendimentoController")

const router = Router()

router.get("/user/index", UsuarioController.index)

router.get("/lista", AtendimentoController.listar)
router.get("/criar", AtendimentoController.cadastrarView)
router.post("/criar", AtendimentoController.cadastrar)
router.get("/editar", AtendimentoController.atualizarView)
router.post("/editar", AtendimentoController.atualizar)
router.post("/excluir", AtendimentoController.excluir)

module.exports = router