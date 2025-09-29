require ('dotenv').config();

const express = require('express');
const bcryptjs = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const connectDB = require('./config/db');
const PORT = process.env.PORT || 3030;

// Crear una instancia de Express 
const app = express();



// Conectar a la base de datos
connectDB();

//importa rutas de usuarios y servicios
const userRouter = require('./routes/users.routes.js'); 
const serviceRouter = require('./routes/services.routes.js'); 

//const whitelist = ['https://render.com', 'https://github.com/']; // Lista de dominios permitidos
//app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

//importa middleware de autorizacion
const auth = require('./middleware/authorization');




// Aqui se crean los endpoints de usuarios y servicios
app.use('/api/v1/users', userRouter); //localhost:3000/api/v1/users
app.use('/api/v1/services', serviceRouter);//localhost:3000/api/v1/services



//iniciar el servidor y envia mensaje en consola para verificar que el servidor esta corriendo
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto`, PORT);
});

