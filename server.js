
const express = require('express');

const mongoose = require('mongoose');

const UsuarioSchema = require("./Modelos/Usuario.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//conexion base de datos

mongoose.connect("mongodb+srv://basedatos:12345@cluster0.0ohwy.mongodb.net/ejegrupo41db?retryWrites=true&w=majority");

//Operaciones CRUD
router.get('/', (req, res) => {
    res.send("este es el inicio de la primera API");
});

//Insertar
router.post('/Usuario', (req, res)=>{
    let nuevoUsuario = new UsuarioSchema({
    /**idUsuario: Number,
    tpUsuario: String,
    documentoUsuario: String,
    nombresUsuario: String,
    apellidosUsuario: String,
    direccionUsuario: String,
    correoUsuario: String,
    telefonoUsuario: String,
    celularUsuario: String,
    webUsuario: String,
    perfilUsuario: String */
       idUsuario: req.body.id,
       tpUsuario: req.body.tp,
       documentoUsuario: req.body.documento,
       nombresUsuario: req.body.nombres,
       apellidosUsuario: req.body.apellidos,
       direccionUsuario: req.body.direccion,
       correoUsuario: req.body.correo,
       telefonoUsuario: req.body.telefono,
       celularUsuario: req.body.celular,
       webUsuario: req.body.web,
       perfilUsuario: req.body.perfil
    });
    nuevoUsuario.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Usario Almacenado")
    })
    });

//Consultar
router.get('/Usuario', (req, res) => {
    UsuarioSchema.find(function(err, datos){
    if (err){
        console.log("Error leyendo los Usuarios");
    }else{
        res.send(datos);
       }
    })
})

//Update
router.put('/Usuario/:id',function(req, res, next){
    UsuarioSchema.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        UsuarioSchema.findOne({_id: req.params.id}).then(function(UsuarioSchema){
            res.send(UsuarioSchema);
        });
    });
});

//Borrar
router.delete('/Usuario/:id',function(req, res, next){
    UsuarioSchema.findByIdAndDelete({_id: req.params.id}).then(function(UsuarioSchema){
        res.send(UsuarioSchema);
    });
});

///
app.use(router);
app.listen(3000, ()=>{
    console.log("Servicio corriendo en el puerto 3000")
});

