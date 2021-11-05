//const { Router } = require('express');
const express = require('express');
const mongoose = require('mongoose');

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

app.use(router);
app.listen(3000, ()=>{
    console.log("Servicio corriendo en el puerto 3000")
});