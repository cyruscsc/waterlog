import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

// run the server
const app = express();
const port = process.env.PORT || 3020;
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => console.log(`Server is running on port ${port}...`));

app.get('/', (req, res) => res.send('Hello World!'));
