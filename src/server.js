// import 'reflect-metadata';
//     import 'zone.js/dist/zone-node';
//     import { platformServer, renderModuleFactory } from '@angular/platform-server'
//     import { enableProdMode } from '@angular/core'
//     import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app.server.module.ngfactory'
//     import * as express from 'express';
//     import { readFileSync } from 'fs';
//     import { join } from 'path';

//     const PORT = 5000;

//     enableProdMode();

//     const app = express();

//     let template = readFileSync(join(__dirname, '..', 'dist', 'index.html')).toString();

//     app.engine('html', (_, options, callback) => {
//       const opts = { document: template, url: options.req.url };

//       renderModuleFactory(AppServerModuleNgFactory, opts)
//         .then(html => callback(null, html));
//     });

//     app.set('view engine', 'html');
//     app.set('views', 'src')

//     app.get('*.*', express.static(join(__dirname, '..', 'dist')));

//     app.get('*', (req, res) => {
//       res.render('index', { req });
//     });

//     app.listen(PORT, () => {
//       console.log(`listening on http://localhost:${PORT}!`);
//     });

    var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

    var app = express();
    app.engine('html', require('ejs').renderFile);

    var public = path.join(__dirname, 'dist');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

app.use('/', express.static(public));
    // app.set('view engine', 'ejs');
    app.set('view engine', 'html');
    app.set('views', 'dist/to-pro-app/')

   // app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    var port = 3000;
    // app.get('/', function (req, res) {
    //   res.render('index');
    // });
    app.post('/send-email', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'rachammalla.priyanka@gmail.com',
              pass: 'my*GMail#1992'
          }
      });
      let mailOptions = {
          from: '"Priyanka Rachamalla" <rachammalla.priyanka@gmail.com>', // sender address
          to: req.body.to, // list of receivers
          subject: req.body.subject, // Subject line
          text: req.body.body, // plain text body
          html: '<b>NodeJS Email Tutorial</b>' // html body
      };

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