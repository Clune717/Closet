const express = require('express')
const mongoose = require('mongoose')
const Infoschema = require('./models/infoSchema.js')
const Info    = require('./models/information.js')
const methodOverride = require('method-override')
const Infopage = require('./models/infoSchema.js')


const app = express()
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))

// app.get('/seed', (req, res) => {
//     Infoschema.create(Info).then((allShoes) => {
//     res.send(allShoes) 
//     })
//  })

app.get('/', (req,res) => {
    Infoschema.find({}).then((allShoes)=> {
        res.render('index.ejs', {
            shoes: allShoes
        })
    })
})


mongoose.connect('mongodb://localhost:27017/closet').then(() => {
    console.log('connection with mongo established')
})

app.listen(3000, () => {
   console.log('listening')
})