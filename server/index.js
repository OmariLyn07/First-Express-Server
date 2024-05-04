const express = require('express')

const app = express()

const port = 3000

app.use(express.static('public'))

const root = require('path').resolve('..\\express-react', '..\\client\\dist')
app.use(express.static(root))

app.get('/', (req, res)=>{
    res.sendFile('index.html', {root})
})

app.get('/test', (req, res)=>{
    res.send("Server is Operational")
})

app.listen(port, ()=>{
    console.log(`Server Running on Port ${port}`)
})