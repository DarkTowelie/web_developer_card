const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'vvs_nodemailer@mail.ru',
            pass: 'GFNfwy9vsbngX1Trtitp'
        }
    },
    {
        from: `MailerTest <vvs_nodemailer@mail.ru>`
    }
);

const mailer = message => {
    transporter.sendMail(message, (err, info) =>{
        if (err) return console.log(err);
        console.log('Email send!');
    })
}

module.exports = mailer;