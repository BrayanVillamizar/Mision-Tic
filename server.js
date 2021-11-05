
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
    
       idUsuario: req.body.id,
       nombreUsuario: req.body.nombre,
       telefonoUsuario: req.body.telefono,
       ciudadUsuario: req.body.ciudad
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

///
app.use(router);
app.listen(3000, ()=>{
    console.log("Servicio corriendo en el puerto 3000")
});

