const express = require('express');
const app = express();
app.get('/', (request, response) =>{
    response.send("Hello sk");
})
app.get('/form', (request, response) =>{
    response.sendFile("user-form.html",{root:__dirname});
})
app.get('/date', (request, response) =>{
    const date = new Date(2025,4,8);
    response.send(`Thanvi Birthday is ${date.getDate()}`);
})
app.listen(3000);

