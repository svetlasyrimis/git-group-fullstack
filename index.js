const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.json({ message: 'It is working' })
})

app.get('/ping', (req, res) => {
  res.json({ ping: 'pong' })
})


app.listen(PORT, () => console.log(`Listening on ${PORT}`));