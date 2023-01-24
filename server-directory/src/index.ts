import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';


dotenv.config()
const app = express();
const PORT = process.env.PORT;

app.get('/', function (req, res) {
    res.send('Hello World!')
})

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL!, () => {
    console.log(`Connected! --> PORT is ${PORT}`);
    console.log(`Running on http://localhost:${PORT}`);
    app.listen(PORT);
});


