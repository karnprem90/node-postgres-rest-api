// server.js
import express from 'express';
import dotenv from 'dotenv';
import 'babel-polyfill';
import middleware from './src/middleware/index';
import routes from './src/routes';
import parser from "body-parser";
import { applyMiddleware } from './src/utils';
dotenv.config();
const app = express()
applyMiddleware(middleware, app);

app.get('/', (req, res) => {
    return res.status(200).send({
        'message': 'YAY! Congratulations! Your first endpoint is working'
    });
});
app.use('/', routes);
app.listen(3000)
console.log('app running on port ', 3000);