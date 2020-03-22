const express = require('express')
const router = express.Router()
const Nota = require('../model/note')

router.post('', async(req, res) => {
    const nota = new Nota({
        descripcion: req.body.descripcion,
        // titular: req.userr._id
    })
    try {
        console.log('no',nota);
        // await tweet.save()
        // res.status(201).json({
        //     mensaje: 'nota agregada',
        //     nota: {
        //         id: nota._id,
        //         descripcion: nota.descripcion,
        //         // titular: tweet.titular
        //     }
        // })
    } catch (e) { res.status(400).send(e) }
});

router.get('', async(req, res) => {
    try {
        res.send('jiji')
    } catch (e) { res.status(500).send() }
  });

module.exports = router
