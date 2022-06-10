const express = require('express')

const app = express()

const port = 3000

const publicDir = __dirname + '/public'

app.get('/', (req, res) => {
    app.use(express.static(publicDir))
    res.sendFile(publicDir + '/index.html')
})

app.listen(port, () => console.log(`Servidor iniciando na porta: ${port}`))