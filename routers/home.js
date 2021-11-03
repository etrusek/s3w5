const express = require('express');

const homeRoutes = express.Router();

homeRoutes.get('/', (req, res) => {
    res.redirect('/client')
})

module.exports = {homeRoutes}