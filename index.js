const express = require('express');
const mailer = require('express-mailer');
const app = express();

const port = 3000;
app.use(express.json({extended:false}));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

mailer.extend(app, {
  from: 'Ayush',
  host: 'smtp.gmail.com', // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: '2018pcecslakshya83@poornima.org',
    pass: 'poornima12345'
  }
});


app.get('/', function (req, res, next) {
    app.mailer.send('email', {
      to: '2016pceceayush023@poornima.org', // REQUIRED. This can be a comma delimited string just like a normal email to field. 
      subject: 'Test Email', // REQUIRED.
      otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
    }, function (err) {
      if (err) {
        // handle error
        console.log(err);
        res.send('There was an error sending the email');
        return;
      }
      res.send('Email Sent');
    });
  });



app.listen(port, () => {
    console.log(`Server started in mode on port ${port} `);
  });
  
