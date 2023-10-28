require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser')
//const fetch = require('node-fetch')


const port = process.env.PORT ||5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '../public')))

app.get("/api", (req,res)=>{
    res.json({"users":["userOne","userTwo","userThree", "userOne","userTwo","userThree", ]})
})

app.get('/apod', async (req, res) => {
    try {
        let image = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        res.send( image )
    } catch (err) {
        console.log('error:', err);
    }
})

app.get('/rover', async (req, res) => {
    try {
        let rovers = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        res.send( rovers )
    } catch (err) {
        console.log('error:', err);
    }
})

app.get('/curiosity', async (req, res) => {
    try {
        let curiosity = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        res.send( curiosity )
    } catch (err) {
        console.log('error:', err);
    }
})

app.get('/spirit', async (req, res) => {
    try {
        let curiosity = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        res.send( curiosity )
    } catch (err) {
        console.log('error:', err);
    }
})

app.get('/opportunity', async (req, res) => {
    try {
        let curiosity = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        res.send( curiosity )
    } catch (err) {
        console.log('error:', err);
    }
})

app.listen(port,()=>{console.log(`Example app listening on port 5000!`)})















// const express = require('express')
// const app = express()

// app.get("/api", (req,res)=>{
//     res.json({"users":["userOne","userTwo","userThree"]})
// })

// app.listen(5000,()=>{console.log(`Example app listening on port 5000!`)})