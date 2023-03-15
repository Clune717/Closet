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

app.get('/new', (req,res)=> {
  res.render('new.ejs')
})

 app.get('/:id', (req, res) => {
    Infoschema.findById(req.params.id).then((foundShoes) => {
      res.render('show.ejs', {
        shoes: foundShoes
      })
    })
  })


  app.get('/:id/edit', (req,res)=> {
    Infoschema.findByIdAndUpdate(req.params.id).then((currentShoes) => {
        res.render('edit.ejs', {
            shoes: currentShoes
        })
    })
})



app.post('/', (req, res) => {
    Infoschema.create(req.body).then((createdShoes) => {
        res.redirect('/')
    })
  })


  app.delete('/:id', (req, res) => {
    Infoschema.findByIdAndRemove(req.params.id).then(() => {
        res.redirect('/')
    })
  })


  app.put('/:id', (req, res) => {
    Infoschema.findByIdAndUpdate(req.params.id, req.body, {new:true}).then(() => {
        res.redirect('/')
    })
  }) 
    

mongoose.connect('mongodb://localhost:27017/closet').then(() => {
    console.log('connection with mongo established')
})

app.listen(3000, () => {
   console.log('listening')
})