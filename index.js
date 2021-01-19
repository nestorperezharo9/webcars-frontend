const express = require('express')
const path = require('path')
const request = require('request')
var fs = require('fs')
const { stringify } = require('querystring')
const { response } = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Coches app listening at https://localhost:${port}`)
})

app.get(['/reviews/combustion', '/reviews/electricos'], function (req, res){
    res.sendFile(path.join(__dirname + "/templates/Car-Visualizer/coches.html"))
})

app.get('/reviews/:id' , function (req, res) {
    res.sendFile(path.join(__dirname+'/templates/Review/Review.html'))
})

app.get('/reviews/:id/specifications', (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/Specifications/Specifications.html'))
})

app.get(['/noticias', '/futuro'], (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/News/News.html'))
})

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname + '/templates/Form/Form.html'))
})
