import express from  'express'; 
import livroController from '../controllers/livroController.js';

const router = express.Router();

router
    .get('/livros', livroController.listarLivros) 
    .get('/livros/:id', livroController.listarLivrosPorId)
    .post('/livros', livroController.cadastrarLivro)
    .put('/livros/:id', livroController.atualizarLivro)  



        
export default router;