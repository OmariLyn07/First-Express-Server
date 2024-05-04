//Import express functions and create a new express application
const express = require('express')

const app = express()
//Port define
const port = 3000
//Static assets
app.use(express.static('public'))

const root = require('path').resolve('..\\express-react', '..\\client\\dist')
app.use(express.static(root))

//Default server route
app.get('/', (req, res)=>{
    res.sendFile('index.html', {root})
})

app.get('/test', (req, res)=>{
    res.send("Server is Operational")
})
//Run server on port specified
app.listen(port, ()=>{
    console.log(`Server Running on Port ${port}`)
})