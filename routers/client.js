const express = require('express');

const clientRoutes = express.Router();

clientRoutes.get('/', (req,res)=>{
    res.render('home')
})

module.exports = {clientRoutes}