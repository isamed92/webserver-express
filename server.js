const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));


hbs.registerPartials(__dirname + '/views/parciales');
//EXPRESS hbs engine
app.set('view engine', 'hbs');

//HELPERS
require('./hbs/helpers.js')
const puerto = process.env.PORT || 3000;


app.get('/',  (req, res) =>{
  res.render('home.hbs',{
    nombre: 'IsaasdASDASDSD'
  });
});
app.get('/about', (req, res) =>{
  res.render('about.hbs')
})

// app.get('/',  (req, res) =>{
//   // res.send('Hello World')
//   let salida ={
//     nombre: 'Isa',
//     edad: '25',
//     url: req.url
//   };
//   res.send(salida);
// });

app.listen(puerto, ()=>{
  console.log('escuchando peticiones en el puerto 3000');
})
