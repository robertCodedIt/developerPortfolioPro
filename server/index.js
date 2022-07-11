'use strict';
require('dotenv').config();

const express = require('express');

const app = express();

const port =process.env.PORT || 3003 ; 

app.listen(port,()=>{
    console.log(`I am listening on port : ${port}`)
});


