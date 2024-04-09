const mongoose = require("mongoose");

const responSchema = mongoose.Schema({
    nombrep: {
        type: String,
        required: true
    },
    responsabilidad: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    horas: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    lugar: {
        type: String,
        required: true
    }    
})

module.exports = mongoose.model('Responsabilidades',responSchema);