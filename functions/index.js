const functions = require('firebase-functions');
const express = require('express');

const app = express();

const indexRouter = require('./routes/app');

app.use('/api', indexRouter);
// app.get('/', (req, res) => res.send('hello'));

exports.app = functions.https.onRequest(app);
