const express = require('express')

const app = express()

app.use(express.json())

let users = [
    {
        id: 1,
        nome: 'Garfield',
    },
    {
        id: 2,
        nome: 'Manda-Chuva',
    },
    {
        id: 3,
        nome: 'Félix',
    }
]

app.get('/users', (req, res) => {
    res.send(users)
}) 

// adicionando um novo usuário 

app.post('/users', (req, res) => {
    users.push(req.body)
    res.send(users)
})

//atualizando usuário

app.put('/users/:id', (req, res) => {
    let usuario = users.find(us => us.id == req.params.id)

    if (!usuario){
        return res.status(400).json({ error: 'Usuário não encontrado.' });
    }

    usuario.nome = req.body.nome
    res.send(usuario)
})

//deletando usuário

app.delete('/users/:id', (req, res) => {
    let usuario = users.find(us => us.id == req.params.id)
    users.splice(users.indexOf(usuario), 1)
    res.status(204).send(users)
})

app.listen(3000, () => {
    console.log("Rodando na porta 3000")
})