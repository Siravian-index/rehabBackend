import * as dotenv from 'dotenv';

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

// app.use(errorHandler.exec())
