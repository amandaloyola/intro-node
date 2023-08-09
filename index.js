const express = require('express')

const app = express();

const porta = 3333;

//define a porta - ver qual está disponivel no servidor
app.listen(porta, () => {
    console.log('Servidor iniciado na porta: ' + porta);
});

app.get('/', (request, response) => {
    response.send('Hello World');
});