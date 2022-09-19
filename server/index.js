import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.get('/', (req, res) => {  
  res.send('Hello Running');
});

app.use('/posts', postRoutes);
app.use("/user", userRouter);
// const CONNECTION_URL = process.env.CONNECTION_URL;
const CONNECTION_URL ="mongodb+srv://clutchx:1122@cluster0.nyyx2vi.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
