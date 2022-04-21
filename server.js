const http = require("http"); // Import the http module
const port = 3000; // porta do servidor


// Criando a rota para acessar o servidor e retornar uma mensagem
const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na página de livros',
    '/autores': 'Entrei na página de autores',
    '/sobre': 'Entrei na página sobre'
}

//criando o servidor
const server = http.createServer((req,res)=>{ 
    res.writeHead(200,{'Content-Type': 'text/plain'}); 
    res.end(rotas[req.url]); //res.end significa que o servidor vai encerrar a requisição e retornar a resposta para o cliente 
})

// Iniciando o servidor na porta 3000
server.listen(port,()=>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})
