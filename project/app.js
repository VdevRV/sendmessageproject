var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'x2xmenunited@gmail.com',
    pass: 'iambatman1'
  }
});

var mailOptions = {
  from: 'x2xmenunited@gmail.com',
  to: 'vdrss3@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was  not easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
