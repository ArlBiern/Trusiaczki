require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const basicDebug = require('debug')('app:startup');
const dbDebug = require('debug')('app:db');

const app = express();

const connectionString = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_ADDRESS}/${process.env.DB_NAME}`;
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => dbDebug('Connected to MongoDB...'))
  .catch((err) => {
    dbDebug('Could not connect to MongoDB.', err.message);
  });

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.send('THIS IS SPARTA');
})

const port = process.env.PORT || 5000;

app.listen(port, () => basicDebug(`App listen to port ${ port }`));
