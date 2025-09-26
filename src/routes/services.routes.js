const express = require('express');
const{allServices, createService, updateService, deleteService, serviceById} = require('../controllers/service.controller');
const serviceRouter =  express.Router();


serviceRouter.get('/', allServices); //  localhost:3000/api/v1/services
serviceRouter.post('/', createService); //  localhost:3000/api/v1/services
serviceRouter.put('/:id', updateService); //  localhost:3000/api/v1/services/:id
serviceRouter.delete('/:id', deleteService); //  localhost:3000/api/v1/services/:id
serviceRouter.get('/:id', serviceById); //  localhost:3000/api/v1/services/:id

module.exports = serviceRouter;