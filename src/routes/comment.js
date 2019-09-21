import express from 'express';
import CommentController from '../controller/comment';

const app = express();

app.post('/', CommentController.create);
app.get('/', CommentController.findAll);
app.get('/:id', CommentController.findOne);

module.exports = app;