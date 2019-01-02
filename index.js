const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const port = process.env.PORT || 3000;

const app = express();


app.use(expressLayouts);

app.set('layout', 'layouts/main-layout');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.use(express.static('public'));




app.get('/', (req, res, next) => {

  res.render('inicio');
})


app.get('/equipamiento', (req, res, next) => {
  
  res.render('equipamiento');
})


app.get('/calefaccion', (req, res, next) => {
  
  res.render('eq/calefaccion');
})


app.get('/bateria', (req, res, next) => {
  
  res.render('eq/bateria');
})


app.get('/panelsolar', (req, res, next) => {
  
  res.render('eq/panelsolar');
})


app.get('/tapiceria', (req, res, next) => {
  
  res.render('eq/tapiceria');
})


app.get('/trabajos', (req, res, next) => {
  
  res.render('trabajos');
})

app.get('/fiat-ducato', (req, res, next) => {

  res.render('fu/fiat-ducato');
})

app.get('/nissan-interestar', (req, res, next) => {

  res.render('fu/nissan-interestar');
})

app.get('/transporter-t5', (req, res, next) => {

  res.render('fu/transporter-t5');
})

app.get('/transporter-t4', (req, res, next) => {

  res.render('fu/transporter-t4');
})

app.get('/mercedes-vito', (req, res, next) => {

  res.render('fu/mercedes-vito');
})

app.get('/citroen-jumper-h3', (req, res, next) => {

  res.render('fu/citroen-jumper-h3');
})

app.get('/citroen-jumper-h2', (req, res, next) => {

  res.render('fu/citroen-jumper-h2');
})



app.get('/transformaciones', (req, res, next) => {
  
  res.render('transformaciones');
})




app.listen(port);
