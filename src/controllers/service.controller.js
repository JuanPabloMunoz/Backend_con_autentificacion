const Service = require ('../models/services');


//controlador para obtener todos los servicios
exports.allServices = async (req,res)=> {
     try {
        const services = await Service.find({});
        return res.status(200).json({ services });
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los servicios', error: error.message });
    }
};


//controlador para crear un nuevo servicio
exports.createService = async (req,res)=> {
    try {
        const {name, price, description} = req.body;
        const newService = await Service.create({name, price, description});
        if (!newService) return res.status(404).json({ error: 'No se pudo crear el servicio' });
        return res.status(200).json({ datos: newService });
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los servicios', error: error.message });
    }
};


//controlador para modificar un servicio
exports.updateService = async (req,res)=> {
   try {
        const {name, price, description} = req.body;
        const updateService = await Service.findByIdAndUpdate(
            req.params.id,
            {name, price, description},
        {new:true, runValidators:true});
        if (!updateService) return res.status(404).json({ message: 'No se pudo encontrar la ID del usuario' });
        return res.status(200).json({ servicioActualizado: updateService });
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener al usuario', error: error.message });
    }
};


//controlador para eliminar un servicio
exports.deleteService = async (req,res)=> {
 try {
        const deletedService = await Service.findByIdAndDelete(req.params.id);
        if (!deletedService) return res.status(404).json({ message: 'No se pudo encontrar la ID del servicio' });
        return res.status(200).json({ message: 'Servicio eliminado correctamente'});
    } catch (error) {
        return res.status(500).json({ 
            message: 'Ha sucedido un error al eliminar el servicio', 
            error: error.message });
    }
};


//controlador para leer servicio por ID
exports.serviceById = async (req,res)=> {
    try {
        const {name, price, description} = req.body;
        const serviceById = await Service.findById(req.params.id);
        if (!serviceById) return res.status(404).json({ message: 'No se pudo encontrar la ID del servicio' });
        return res.status(200).json({ servicio: serviceById });
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener el servicios', error: error.message });
    }
};
