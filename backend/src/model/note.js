const mongoose = require('mongoose')
const notaEsquema = mongoose.Schema({
    titulo: {type: String, required: true},
    descripcion: {
        type: String,
        required: true,
    },
    // titular: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'usuario',
    //     required: true
    // }
}, { timestamps: true })

const Nota = mongoose.model('nota', notaEsquema)
module.exports = Nota
