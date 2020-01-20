const nodemailer = require('nodemailer');

module.exports = {
    sendEmail: (req, res) => {
        //send email via nodemailer
        var EMAIL_ADDRESS = process.env.EMAIL_ADDRESS;
        // var EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
  
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            type: 'OAuth2',
            user: EMAIL_ADDRESS,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: process.env.ACCESS_TOKEN
          }
        });
  
        const mailOptions = {
          from: EMAIL_ADDRESS,
          to: 'chancyleath@hotmail.com',
          subject: 'Request for Information | chancyleath.com',
          text:
            `From: ${req.body.firstName} ${req.body.lastName} \n\n` +
            `Email: ${req.body.email} \n\n` +
            `Phone: ${req.body.phoneNumber} \n\n` +
            `Preferred Method of Contact: ${req.body.preferredMethod}\n\n` +
            `Details: ${req.body.messageDetails}`
        };
  
        console.log('sending email');
  
        transporter.sendMail(mailOptions, function (err, response) {
          if (err) {
            console.error('there was an error: ', err);
            res.status(404).json('email error')
          }
          else {
            console.log('here is the response: ', response);
            res.status(200).json('sent');
          }
        });

    }
}