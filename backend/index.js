import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from './src/routes/index.js';
import { connectToMongo } from './src/config/mongoose.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', router);

const port = process.env.PORT || 3000;

try {
  await connectToMongo();
  app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
  });
} catch (err) {
  console.log(err);
}
