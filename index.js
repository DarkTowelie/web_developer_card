const express = require('express');
const bodyParser = require('body-parser');
const mailer = require('./public/jsp/nodemailer.js')
let app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res){
    return res.sendFile(__dirname +'/public/main.html');
})

app.listen(3001, function(){
    console.log('Server listening at http://localhost:3001');
})

app.post('/sendMail', (req, res) =>{
    let sendingMessage = {
        to: req.body.email,
        subject: `${req.body.name}! Благодарим за ваше сообщение!`,
        text: "Мы постораемся ответить вам в ближайшее время!"
    }
    mailer(sendingMessage);

    sendingMessage = {
        to: 'vvs_nodemailer@mail.ru',
        subject: `Получено сообщение от: ${req.body.email}.`,
        text: req.body.message
    }
    mailer(sendingMessage);
    
    res.redirect('/');
});

