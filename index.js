const express = require ('express')
const app = express ()

app.get ('/', function(req,res){
    res.send("Bem vindo Matheus")
})

app.listen(3000, function(){
    console.log("Conexão inicializada na porta 3000")
})