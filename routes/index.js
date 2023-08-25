const nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { body: {}, msg_type: '' });
});

router.post('/', function (req, res, next) {
  const body = req.body;

  if (body.host && body.port) {
    const secured = parseInt(body.secured);
    let transporter = nodemailer.createTransport({
      host: body.host,
      port: parseInt(body.port),
      secure: (secured == 1 ? true : false),
      requireTLS: (secured == 2 ? true : false),
      auth: {
        user: body.username,
        pass: body.password
      }
    });

    let mailOptions = {
      from: body.from,
      to: body.to,
      subject: body.subject,
      text: body.body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.render('index', { msg_type: 'error', msg_body: 'Error : ' + (error.response || ''), body: body });
      } else {
        res.render('index', { msg_type: 'success', msg_body: 'Whoosh !!! Check your inbox please ...', body: body });
      }
    });
  } else {
    res.render('index', { msg_type: 'error', msg_body: 'Please fill in required fields !', body: body });
  }
});

module.exports = router;
