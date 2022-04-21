require('colors');
require('dotenv').config();
const { request } = require('express');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT; 

//handlebars
app.set('view engine', 'hbs'); 
hbs.registerPartials( __dirname + '/views/partials');

//servir contenido estático
app.use( express.static('public') );

app.get('/', (req, res) => {
    //old: res.sendFile( __dirname + '/public/index.html' );
    //res.send('Hola');
    res.render('home', {
        nombre: 'MAMuT',
        titulo: 'Server Node'
    });
});

app.get('/generico', (req, res) => {
    //res.sendFile( __dirname + '/public/generic.html' );
    res.render('generic', {
        nombre: 'MAMuT',
        titulo: 'Server Node'
    });
});

app.get('/elemento', (req, res) => {
    res.render('elements', {
        nombre: 'MAMuT',
        titulo: 'Server Node'
    });
});

/* Para tomar cualquier petición por método específico a cualquier ruta no definida */
/* Puede ser con function (req, res) o con función de flecha (arrow function) */

app.get('*', function (req, res) {
    //res.send('404 | Page not found')
    //res.sendFile( __dirname + '/public/404.html' );
    res.render('404');
});

app.listen(port, () => {
    console.log( `Escuchando en puerto: ${process.env.PORT}`.yellow )
});