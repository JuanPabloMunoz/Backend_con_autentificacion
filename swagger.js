import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger_out.json';
const endpointsFiles = ['./src/routes/users.routes.js', './src/routes/services.routes.js'];

const doc = {
    info: {
        title: 'API de usuarios y Servicios',
        description: 'API para gestionar usuarios y servicios, usando metodos crud, con autenticacion JWT y encriptacion de contraseñas con bcryptjs y base de datos MongoDB',
    },
    host: 'localhost:3000',
    schemes: ['http'],
}

swaggerAutogen()(outputFile, endpointsFiles, doc);