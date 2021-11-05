const mongoose = require ("mongoose");

let UsuarioSchema = new mongoose.Schema({
    idUsuario: Number,
    tpUsuario: String,
    documentoUsuario: Number,
    nombresUsuario: String,
    apellidosUsuario: String,
    direccionUsuario: String,
    correoUsuario: String,
    telefonoUsuario: Number,
    celularUsuario: Number,
    webUsuario: String,
    perfilUsuario: String

});

module.exports = mongoose.model('Usuario', UsuarioSchema, 'Usuarios');