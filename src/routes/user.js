import express from 'express';
import UserController from '../controller/user';

const app = express();

app.post('/', UserController.create);
app.get('/', UserController.findAll);
app.get('/:id', UserController.findOne);

module.exports = app;