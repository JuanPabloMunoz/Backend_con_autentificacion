const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("La conexion a la base de datos se ha realizado correctamente");
  } catch (error) {
    console.error('error al conectar a la base de datos', error.message);
    process.exit(1);
  }
}
module.exports = connectDB;