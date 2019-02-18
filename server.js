const express = require('express');
const bodyParser = require('body-parser');
const formidable = require('formidable');
require('colors');

const PORT = 8080;

const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.listen(PORT, function() {
  let host = this.address().address;
  host = host === '::' ? 'localhost' : host;
  const port = this.address().port;
  console.log(`Server listen on http://${host}:${port}`.blue);
});

let isLogged = false;
let credentials = {};

app.get('/', (req, res) => res.status(200).render('index', {
  isLogged: isLogged,
  credentials: credentials
}));
app.use(express.static('assets'));

app.get('/auth/google', (req, res) => res.status(200).render('google-login'));

app.post('/login-form', (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    if (err) throw err;
    credentials = fields;
    isLogged = true;
    res.status(301).redirect('/');
  });
});

app.get('/logout', (req, res) => {
  isLogged = false;
  res.status(301).redirect('/');
});

app.get('/secret', (req, res) => {
  if (isLogged) {
    res.status(200).render('secret', {
      credentials: credentials
    });
  } else {
    res.sendStatus(401);
  }
});

app.use((req, res, next) => {
  res.sendStatus(404);
});
