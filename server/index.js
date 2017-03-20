import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import path from 'path';

// routes
import auth from './routes/auth'

const port = 8000;
const app = express();

app.use(express.static(path.join(__dirname, '../')))
app.use(bodyParser.json());

app.use('/api/auth', auth)


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
})

app.listen(port);
console.log('Server started on port:' + port);
