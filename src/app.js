import expres from  'express';

const app = expres();

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
export default app;