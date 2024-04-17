const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()
const port = process.env.PORT || 5003
const URI = process.env.MONGODB_URI;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose.connect(URI)
.then(() => {
    console.log('Connected to MongoDB');
})

app.listen(port, () => {
  console.log(`:istening on port ${port}`)
})