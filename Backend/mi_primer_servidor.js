const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('¡hola patanes!')
});

app.get('/json', (req, res) => {
    res.json({mensaje: 'hola, mundo en formato JSON'})
});

app.get('/informacion', (req,res) => {
    res.json ({nombre: 'isaac ', apellido: 'ibarra', edad: ' 16', institucion: ' sallecampoamor'})
});

app.listen(3000, () => {
    console.log('Servidor escuchado en el puerto 3000');
});

