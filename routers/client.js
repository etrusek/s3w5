const express = require('express');
const {db} = require("../utils/db");

const clientRoutes = express.Router();

clientRoutes
    .get('/', (req, res) => {
        res.render('client/list-all', {
            clients: db.getAll(),
        })
    })
    .get('/:id', (req, res) => {
        res.render('client/one', {
            client: db.getOne(req.params.id),
        })
    })
    .post('/', (req, res) => {
        res.send(`dodaj`)
    })
    .put('/:id', (req, res) => {
        res.send(`update`)
    })
    .delete('/:id', (req, res) => {
        res.send(`delete ${id}`)
    })


module.exports = {clientRoutes}