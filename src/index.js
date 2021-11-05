import * as dotenv from 'dotenv';

dotenv.config();

import { router } from './routes/index.js';

import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/error-handler.middleware.js';
import mongoose from 'mongoose';

const app = express();

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.APP_PORT, () => {
      console.log('localhost:' + process.env.APP_PORT);
    });
  })
  .catch((err) => console.log(err));

app.use(express.json());
// app.use(cors())

app.get('/', (req, res) => {
  res.send('test');
});

app.use('/api', router);

// app.use(errorHandler.exec())
