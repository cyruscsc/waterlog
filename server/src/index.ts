import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares';
import { serverLog } from './lib/functions';

dotenv.config();

// run the server
const app = express();
const port = process.env.PORT || 3020;
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => serverLog(`Server is running on port ${port}...`));

app.get('/', (req, res) => res.send('Hello World!'));

// handle errors
app.use(errorHandler);
