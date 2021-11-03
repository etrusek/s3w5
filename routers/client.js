const express = require('express');

const clientRoutes = express.Router();

clientRoutes.get('/', (req,res)=>{
    res.send('ok')
})

module.exports = {clientRoutes}