const express = require('express');
const connection = require('./Connection');
const cors = require('cors');

const port = 5050;

const app = express();

app.use(cors());

app.listen(port,()=>{
    console.log("Server Run At Port :"+port);
})