import expres from  'express';

const app = expres();
app.use(expres.json()); 


const livros = [
    {
        id : 1,
        titulo: 'O senhor dos aneis' 
    },
    {
        id : 2,
        titulo: 'O Hobbit'
    }
]


app.get('/', (req,res)=>{
    res.status(200).send('Curso de  Node.js');
})


app.get('/livros', (req,res)=>{
    res.status(200).send(livros);
})

app.post('/livros', (req,res)=>{
    livros.push(req.body);
    res.status(201).send('Livro adicionado com sucesso');
})



app.put('/livros/:id',(req,res)=>{
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);

})

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id);

}

export default app;