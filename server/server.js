var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kn7671513@gmail.com',
    pass: 'qyzleselwrtleswh'
  }
});

var mailOptions = {
  from: 'kn7671513@gmail.com',
  to: 'ghadisampada13@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hi this is email test!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});