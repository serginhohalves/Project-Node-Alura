import expres from  'express';
import db from './config/dbConnect.js';
import livros from './models/Livro.js';
import routes from './routes/index.js';



db.on("erro", console.log.bind('Erro de Conexão'))
db.once("open", ()=>{ 
    console.log("Conexão com o banco de dados realizada com sucesso!")
})


const app = expres();
app.use(expres.json()); 


routes(app);


// app.delete('/livros/:id',(req,res)=>{
//     let {id} = req.params;
//     let index = buscaLivro(id);
//     livros.splice(index, 1);
//     res.send(`Livro ${id} excluido com sucesso`);
    
// })
  

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id);

}

export default app;