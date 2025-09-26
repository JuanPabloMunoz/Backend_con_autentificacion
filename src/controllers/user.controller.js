const User = require('../models/users');
const bcryptjs= require('bcryptjs');
const jwt= require('jsonwebtoken');

// Controlador para registrar un nuevo usuario
exports.sigin= async (req,res)=>{

    const {name, mail, description, password} = req.body;
   
    try {
        const passwordSalt = await bcryptjs.genSalt(10);
        const passwordHashed = await bcryptjs.hash(password, passwordSalt);
        const newUser = await User.create({name, mail, description, password: passwordHashed});

        if (!newUser) return res.status(400).json({ error: 'No se pudo crear al usuario' });
        return res.status(201).json({ datos: newUser });
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear al usuario', error: error.message });
    }
};


// Controlador para el login de un usuario
exports.login= async (req,res)=> { 

    const {mail, password} = req.body;
     try{
        let foundUser = await User.findOne({ mail});
        if(!foundUser) return res.status(400).json({error: 'No se encontro el usuario'});
        const passwordSuccess = await bcryptjs.compare(password, foundUser.password);
        if(!passwordSuccess) return res.status(400).json({error: 'El mail, o la contraseña es incorrecta'});
    
        const payload = {
            user:{ 
                id: foundUser._id
            }
        };
    
        jwt.sign(
            payload,
            process.env.SECRET,
            {
                expiresIn: '1h'
            },
            (error, token) => {
                if(error) throw error;
                res.status(200).json({ token })
            }
        )
     }catch(error){
        res.json({
            message: 'Ha ocurrido un error al obtener el Token', error
        });
    }
    };
   
   
   //controlador para verificar el usuario y el token
   exports.loginVerification= async (req,res)=> {
     try {
        const user = await User.findById(req.user.id).select('-password');
        res.json({user});
    } catch (error) {
        res.status(500).json({
            message: 'Ha ocurrido un error al obtener el usuario', 
            error,
        });
    }
};


//controlador paraobtener los datos de un usuario por ID
exports.modifyUserById = async (req,res)=> {
    try {
        const {name, mail, description, password} = req.body;
        const modifyUserById = await User.findByIdAndUpdate(
            req.params.id,
            {name, mail, description, password},
        {new:true, runValidators:true});
        if (!modifyUserById) return res.status(404).json({ message: 'No se pudo encontrar la ID del usuario' });
        return res.status(200).json({ usuario: modifyUserById });
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener al usuario', error: error.message });
    }
};