// 'use strict';

// var express = require('express');
// var app = express();

// var bodyParser = require('body-parser');

// var nodemailer = require('nodemailer');

// var port = process.env.PORT || 5000;

// app.use(express.static('./src/client/'));
// app.use(express.static('./'));
// app.use(express.static('./.tmp'));
// app.use('/*', express.static('./src/client/index.html'));

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.post('/sendMail', function(req, res) {
//   var transporter = nodemailer.createTransport({
//     service: 'Godaddy',
//         host: "smtpout.secureserver.net",  
//         secureConnection: true,
//         port: 465,
//     auth: {
//       user: 'rachammalla.priyanka@gmail.com',
//       pass: 'my*GMail#1992'
//     }
//   });
//   var data = req.body;
//   var mailOptions = {
//     from: 'rachammalla.priyanka@gmail.com',
//   to: 'rpriyanka0906@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
//   };

//   transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//       return console.log(error);
//     }
//     console.log('Message sent: ' + info.response);
//     console.log('Data:' + data.contactName);
//   });
//   res.json(data);
// });

// app.listen(port, function () {
//   console.log('Express app listening on port: ' + port);
//   console.log(__dirname);
// });

// // // var express = require('express'),
// // //     path = require('path'),
// // //     nodeMailer = require('nodemailer'),
// // //     bodyParser = require('body-parser');

// // //     var app = express();
// // //     app.set('view engine', 'ejs');
// // //     app.use(express.static('public'));
// // //     app.use(bodyParser.urlencoded({extended: true}));
// // //     app.use(bodyParser.json());
// // //     var port = 3000;
// // //     app.get('/', function (req, res) {
// // //       res.render('index');
// // //     });
// //     app.post('/send-email', function (req, res) {
// //       let transporter = nodeMailer.createTransport({
// //           host: 'smtp.gmail.com',
// //           port: 465,
// //           secure: true,
// //           auth: {
// //               user: 'rachammalla.priyanka@gmail.com',
// //               pass: 'my*GMail#1992'
// //           }
// //       });
// //       let mailOptions = {
// //           from: '"Priyanka Rachamalla" <rachammalla.priyanka@gmail.com>', // sender address
// //           to: req.body.to, // list of receivers
// //           subject: req.body.subject, // Subject line
// //           text: req.body.body, // plain text body
// //           html: '<b>NodeJS Email Tutorial</b>' // html body
// //       };

// //       transporter.sendMail(mailOptions, (error, info) => {
// //           if (error) {
// //               return console.log(error);
// //           }
// //           console.log('Message %s sent: %s', info.messageId, info.response);
// //               res.render('index');
// //           });
// //       });
// //           app.listen(port, function(){
// //             console.log('Server is running at port: ',port);
// //           });

// // var express = require('express'),
// //     path = require('path'),
// //     nodeMailer = require('nodemailer'),
// //     bodyParser = require('body-parser');

// //     var app = express();
// //     // app.set('view engine', 'ejs');
// //     app.use(express.static('public'));
// //     app.use(bodyParser.urlencoded({extended: true}));
// //     app.use(bodyParser.json());
// //     var port = 3000;
// //     app.get('/', function (req, res) {
// //       res.render('index');
// //     });
// //     app.post('/send-email', function (req, res) {
// //       let transporter = nodeMailer.createTransport({
// //         service: 'Godaddy',
// //         host: "smtpout.secureserver.net",  
// //         secureConnection: true,
// //         port: 465,
// //           auth: {
// //               user: 'info@2procleaningservices.com',
// //               pass: '2Proclsr@'
// //           }
// //       });
// //       let mailOptions = {
// //           from: 'info@2procleaningservices.com', // sender address
// //           to: 'rpriyanka0906@gmail.com', // list of receivers
// //           subject: "Hello", // Subject line
// //           text: "Welcome", // plain text body
// //           html: '<b>NodeJS Email Tutorial</b>' // html body
// //       };

// //       transporter.sendMail(mailOptions, (error, info) => {
// //           if (error) {
// //               return console.log(error);
// //           }
// //           console.log('Message %s sent: %s', info.messageId, info.response);
// //               res.render('index');
// //           });
// //       });
// //           app.listen(port, function(){
// //             console.log('Server is running at port: ',port);
// //           });

var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

    var app = express();
    app.engine('html', require('ejs').renderFile);

    var public = path.join(__dirname, 'dist/to-pro-app');

    app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

app.use('/', express.static(public));
    // app.set('view engine', 'ejs');
    app.set('view engine', 'html');
    app.set('views', 'src')

   // app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    var port = 3000;
    // app.get('/', function (req, res) {
    //   res.render('index');
    // });
    app.post('/send-email', function (req, res) {
      let transporter = nodeMailer.createTransport({
        service: 'Godaddy',
        host: "smtpout.secureserver.net",  
        secureConnection: true,
        port: 465,
          auth: {
              user: 'info@2procleaningservices.com',
              pass: '2Proclsr@'
          }
      });
      let mailOptions = {
          from: 'info@2procleaningservices.com', // sender address
          to: "rpriyanka0906@gmail.com", // list of receivers
          subject:"jsbdcjs", // Subject line
          //text: "juywetruwuoiwoeiurwibvxncbn", // plain text body
          html: `<p>Hello, <strong>${req.body.firstName}</strong>, Welcome</p>` // html body
      };
      console.log(req);
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
      });
          app.listen(port, function(){
            console.log('Server is running at port: ',port);
          });

