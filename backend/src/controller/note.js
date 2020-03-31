const express = require('express')
const router = express.Router()
const Nota = require('../model/note')

router.post('', async(req, res) => {
    const nota = new Nota({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion
        // titular: req.userr._id
    })
    try {
        await nota.save()
        res.status(201).json({
            mensaje: 'nota agregada',
            nota: {
                id: nota._id,
                titulo: nota.titulo,
                descripcion: nota.descripcion,
                // titular: tweet.titular
            }
        })
    } catch (e) { res.status(400).send(e) }
});

router.get('', async(req, res) => {
    try {
        const notas = await Nota.find({})
        res.status(200).json({
            mensaje: "todos tus notas",
            notas,
        })
    } catch (e) { res.status(500).send() }
});

router.get('/:id', async(req, res) => {
    try {
        const note = await Nota.findById(req.params.id)
        if(!note) res.status(404).send()
        res.send(note)
    } catch (e) {
        res.status(500).send()
    }
})

router.put('/:id', async(req, res) => {
    try {
        const newNote = new Nota({
            _id: req.params.id,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion
        })
        await Nota.updateOne({_id: req.params.id}, newNote)
        res.status(200).json({mensaje: 'nota update'})
    } catch (e) {
        
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const nota = await Nota.findOneAndDelete({
            _id: req.params.id,
        })
        if (!nota) {
            return res.status(404).json({
                mensaje: 'no autorizado'
            })
        }
        res.status(200).json({ mensaje: 'nota eliminada' })
    } catch (e) { res.status(500).send() }
});

module.exports = router
