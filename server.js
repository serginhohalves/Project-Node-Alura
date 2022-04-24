import app from './src/app.js';
const port = process.env.PORT || 3000; 

 

// Iniciando o servidor na porta 3000
app.listen(port,()=>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})

