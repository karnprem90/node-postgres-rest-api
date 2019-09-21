import express from 'express';
const app = express();

const userRoute = require('./user');
const postRoute = require('./post');
const commentRoute = require('./comment');

app.use('/user', userRoute);
app.use('/post', postRoute);
app.use('/comment', commentRoute);

module.exports = app;