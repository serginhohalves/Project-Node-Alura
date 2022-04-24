import livros from '../models/Livro.js';


class livroController{

    static listarLivros = (req,res)=>{
        livros.find((erro, livros )=>{
            res.status(200).send(livros);   
        })
    }

    static listarLivrosPorId(req,res){
        const id = req.params.id;
        livros.findById(id, (erro, livros)=>{
            if(erro){
                res.status(400).send({message: `${erro.message} - Id do livro não encontrado`});
            }else{
                res.status(200).send(livros);
            }
        })
    }

    static cadastrarLivro = (req,res)=>{

        const livro = new livros(req.body);
        livro.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro`});
            } else{
                res.status(201).send(livro.toJSON());
            }
        })

    }

    static atualizarLivro = (req,res)=>{
        const id = req.params.id
        livros.findByIdAndUpdate(id, {$set:req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: `livro atualizado com sucesso`});
            }else{
                res.status(500).send({message: err.message}); 
            }
        })

    }
}





export default livroController;