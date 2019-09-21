import express from 'express';
import PostController from '../controller/post';

const app = express();

app.post('/', PostController.create);
app.get('/', PostController.findAll);
app.get('/:id', PostController.findOne);

module.exports = app;