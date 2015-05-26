var express = require('express');
var nodemailer = require('nodemailer');
// var morgan = require('morgan');
var app = express();


app.use(express.static(__dirname + '/public'));

app.post("/sendemail", function(req, res) {
    //console.log("sending email");
    // res.redirect('/');
    var mailOpts, smtpConfig;
    smtpConfig = nodemailer.createTransport('SMTP', {
        service: 'Gmail',
        auth: {
            user: "yourGmailidGoesHere@gmail.com",
            pass: "yourpasswordhere"
        }
    });

    mailOpts = {
        from: 'myname@gmail.com',
        to: ' yourGmailidGoesHere @gmail.com',

        subject: 'contact form',
        text: req.body.message
    };

    smtpConfig.sendMail(mailOpts, function(error, response) {

        if (error) {
            res.end("Email send Falied");
        } else {
            res.end("Email sent successfully");
        }
    });
});




app.listen(process.env.PORT || 3000);