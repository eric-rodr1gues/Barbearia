const { Router } =  require("express")
const UsuarioController = require("../controllers/UsuarioController")
const AtendimentoController = require("../controllers/AtendimentoController")

const router = Router()

router.get("/user/index", (req, res) => UsuarioController.index(req, res))
router.post("/user/create", (req, res) => UsuarioController.usuarioPostAsync(req, res))
router.get("/user/create", (req, res) => UsuarioController.usuarioCreateView(req, res))
router.put("/user/edit", (req, res) => UsuarioController.usuarioPutAsync(req, res))
router.get("/user/edit/:id", (req, res) => UsuarioController.usuarioEditView(req, res))
router.get("/user/list", (req, res) => UsuarioController.usuarioListView(req, res))
router.delete("/user/delete/:id", (req, res) => UsuarioController.usuarioDeleteAsync(req, res))


/*router.get("/lista", AtendimentoController.listar)
router.get("/criar", AtendimentoController.cadastrarView)
router.post("/criar", AtendimentoController.cadastrar)
router.get("/editar", AtendimentoController.atualizarView)
router.post("/editar", AtendimentoController.atualizar)
router.post("/excluir", AtendimentoController.excluir)*/

module.exports = router