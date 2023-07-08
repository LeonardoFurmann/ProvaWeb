var express = require('express');
var router = express.Router();
const livroController = require('../controllers/livroController');

router.get('/todos', livroController.listar);
router.post('/', livroController.cadastrar);
router.get('/:isbn', livroController.buscarPorISBN);
router.put('/:isbn', livroController.atualizar);
router.delete('/:isbn', livroController.excluir);

module.exports = router;
