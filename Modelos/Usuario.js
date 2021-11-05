const mongoose = require ("mongoose");

let UsuarioSchema = new mongoose.Schema({
    idUsuario: Number,
    nombreUsuario: String,
    telefonoUsuario: String,
    ciudadUsuario: String

});

module.exports = mongoose.model('Usuario', UsuarioSchema, 'Usuarios');