import * as dotenv from 'dotenv';
import path from 'path'

dotenv.config();

import { router } from './routes/index.js';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middleware/error-handler.middleware.js';
import mongoose from 'mongoose';

const app = express();

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('localhost:' + process.env.PORT);
    });
  })
  .catch((err) => console.log(err));

// middleware
app.use(express.json());
app.use(
  cors({
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);
app.use(helmet());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// routes
app.use('/api', router);
//app.use('*', express.static('build'));

// All other GET requests not handled before will return our React app

app.use('/static', express.static(path.join(process.cwd(), 'build/static')))
// temporal
app.use('/manifest.json', express.static(path.join(process.cwd(), 'build/manifest.json')))
app.use('/logo512.png', express.static(path.join(process.cwd(), 'build/logo512.png')))
app.use('/logo192.png', express.static(path.join(process.cwd(), 'build/logo192.png')))
app.use('/favicon.ico', express.static(path.join(process.cwd(), 'build/favicon.ico')))

app.get('*', (req, res) => {
  res.set("Content-Security-Policy", "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'")

  res.sendFile(path.resolve(process.cwd(), 'build', 'index.html'));
});

// app.use(errorHandler.exec())
