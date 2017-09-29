const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: parseInt(body.port),
    secure: (parseInt(body.secured) == 1 ? true : false),
    requireTLS: true,
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

  console.log(transporter);
  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.render('index', { msg_type: 'error', msg_body: 'Oopps !!! Something went wrong ...', body: body });    
    } else {
        res.render('index', { msg_type: 'success', msg_body: 'Whoosh !!! Check your inbox please ...', body: body });    
    }
  });