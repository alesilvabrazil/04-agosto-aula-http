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

app.listen(3000, () => {
    console.log("Rodando na porta 3000")
})