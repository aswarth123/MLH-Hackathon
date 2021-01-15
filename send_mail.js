var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '**********', // sender's email
    pass: '*********'   // sender's password
  }
});

var mailOptions = {
  from: '********',  // sender's email
  to: '*********',   // receiver's email
  subject: 'Sending Email using Node.js',
  text: 'HI I am aswarth'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
