const express = require('express');
const app = express()

// moteur template
app.set('view engine' , 'ejs')

// middlelware
app.use(express.static('public'))


// routes
app.get('/', function(req ,res){
    res.render('index')
})
app.get('/about', function(req , res){
    res.render('about')
})
app.get('/services', function(req , res){
    res.render('services')
})
app.get('/barber-shop', function(req , res){
    res.render('barber-shop')
})
app.get('/single', function(req , res){
    res.render('single')
})
app.get('/blog', function(req , res){
    res.render('blog')
})
app.get('/contact', function(req , res){
    res.render('contact')
})


app.listen(8080)