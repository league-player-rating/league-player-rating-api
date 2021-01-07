require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';

import routes from './routes';
// import database from "./models/config";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use(logger('dev'))

app.use(express.static('public'));
app.use('/api/v1', routes);

// console.log(database.sync().then(() => {
//     console.log('connected to database');
//     app.listen(PORT, () => {
//       console.log(`server running on port ${PORT}`)
//     });
//   }))

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

// database.sync().then(() => {
//   console.log('connected to database');
//   app.listen(PORT, () => {
//     console.log(`server running on port ${PORT}`)
//   });
// }).catch(e => {
//   console.error(e);
//   exit();
// });

// https://developer.okta.com/blog/2019/03/27/build-rest-api-with-node-and-postgres
// https://medium.com/@purposenigeria/build-a-restful-api-with-node-js-and-express-js-d7e59c7a3dfb