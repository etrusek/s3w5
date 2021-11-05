const express = require('express');
const {db} = require("../utils/db");
const {NotFoundError} = require("../utils/error");

const clientRoutes = express.Router();

clientRoutes
    .get('/', (req, res) => {
        res.render('client/list-all', {
            clients: db.getAll(),
        })
    })
    .get('/:id', (req, res) => {
        const client = db.getOne(req.params.id);

        if (!client){
            throw new NotFoundError()
        }

        res.render('client/one', {
            client,
        })
    })
    .post('/', (req, res) => {
        const id = db.create(req.body)
        res
            .status(201)
            .render(`client/added`, {
                name: req.body.name,
                mail: req.body.mail,
                nextContactAt: req.body.nextContactAt,
                notes: req.body.notes,
                id,
            })
    })
    .put('/:id', (req, res) => {
        db.update(req.params.id, req.body)
        res.render('client/modified', {
            client: req.body,
            id: req.params.id
        })
    })
    .delete('/:id', (req, res) => {
        db.delete(req.params.id);
        res.render('client/deleted')
    })
    .get('/form/add', (req, res) => {
        res.render('client/forms/add')
    })
    .get('/form/edit/:id', (req, res) => {
        const client = db.getOne(req.params.id);

        if (!client){
            throw new NotFoundError()
        }

        res.render('client/forms/edit', {
            client: db.getOne(req.params.id),
        })
    })


module.exports = {clientRoutes}