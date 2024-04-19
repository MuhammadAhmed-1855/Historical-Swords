const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');
const mongoose = require('mongoose');

const userRouter = require('./routes/userRouter');
const eraRouter = require('./routes/eraRouter');
const makerRouter = require('./routes/makerRouter');
const typeRouter = require('./routes/typeRouter');
const materialRouter = require('./routes/materialRouter');
const swordRouter = require('./routes/swordRouter');


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

app.use('/users', userRouter);
app.use('/eras', eraRouter);
app.use('/makers', makerRouter);
app.use('/types', typeRouter);
app.use('/materials', materialRouter);
app.use('/swords', swordRouter);

app.listen(port, () => {
  console.log(`:istening on port ${port}`)
})