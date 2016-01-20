var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

router.post('/send', function(req, res, next) {
   var transporter = nodemailer.createTransport({
       service: 'Gmail',
       auth: {
           user: 'reduxdoodle@gmail.com',
           pass: 'eldoodxuder'
       }
   });

    var mailOptions = {
        from: 'Express Site <expressguy@gmail.com>',
        to: 'arora.nick@gmail.com',
        subject: 'website submission',
        text: "You have a new submission with the following details:"
                + "\nName: " + req.body.name
                + "\nEmail: " + req.body.email
                + "\nMessage: " + req.body.message,
        html: '<p>You have a new submission with the following details:</p><ul>'
                + '<li>Name: ' + req.body.name + '</li>'
                + '<li>Email: ' + req.body.email + '</li>'
                + '<li>Message: ' + req.body.message + '</li>'
                + '</ul>'
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message Sent: ' + info.response);
        }

        res.redirect('/');
    });
});

module.exports = router;
